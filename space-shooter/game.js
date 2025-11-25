/* ========================================
   COSMIC ASSAULT - SPACE SHOOTER GAME
   Three.js Game Engine
   ======================================== */

// ========== GAME STATE ==========
const GameState = {
    MENU: 'menu',
    PLAYING: 'playing',
    PAUSED: 'paused',
    WAVE_COMPLETE: 'wave_complete',
    GAME_OVER: 'game_over'
};

// ========== GAME CONFIGURATION ==========
const CONFIG = {
    // Player
    playerSpeed: 0.15,
    playerStrafeSpeed: 0.12,
    playerHealth: 100,
    playerEnergy: 100,
    energyRegenRate: 0.2,
    
    // Weapons
    laserSpeed: 2,
    laserDamage: 25,
    fireRate: 150,
    specialDamage: 100,
    specialCost: 50,
    
    // Enemies
    enemyBaseSpeed: 0.02,
    enemySpeedIncrement: 0.005,
    
    // World
    worldBoundary: 30,
    forwardSpeed: 0.3
};

// ========== GLOBAL VARIABLES ==========
let scene, camera, renderer;
let player, playerGroup;
let enemies = [];
let lasers = [];
let particles = [];
let asteroids = [];
let powerUps = [];
let stars = [];
let nebulae = [];
let planets = [];

let currentState = GameState.MENU;
let currentWave = 1;
let score = 0;
let waveScore = 0;
let enemiesDestroyed = 0;
let shotsFired = 0;
let shotsHit = 0;

let playerHealth = CONFIG.playerHealth;
let playerEnergy = CONFIG.playerEnergy;
let specialReady = true;

let mouse = { x: 0, y: 0 };
let keys = {};
let lastFireTime = 0;
let clock;

// ========== DOM ELEMENTS ==========
const screens = {
    mainMenu: document.getElementById('main-menu'),
    instructions: document.getElementById('instructions-screen'),
    hud: document.getElementById('hud'),
    waveComplete: document.getElementById('wave-complete'),
    gameOver: document.getElementById('game-over'),
    pause: document.getElementById('pause-screen')
};

const hudElements = {
    healthFill: document.getElementById('health-fill'),
    healthText: document.getElementById('health-text'),
    energyFill: document.getElementById('energy-fill'),
    energyText: document.getElementById('energy-text'),
    waveNum: document.getElementById('wave-num'),
    score: document.getElementById('score'),
    enemiesLeft: document.getElementById('enemies-left'),
    crosshair: document.getElementById('crosshair'),
    specialIndicator: document.getElementById('special-indicator')
};

// ========== INITIALIZATION ==========
function init() {
    // Scene setup
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a1a, 0.008);
    
    // Camera setup (third person)
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 15);
    camera.lookAt(0, 0, -50);
    
    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000);
    document.getElementById('game-container').appendChild(renderer.domElement);
    
    // Clock for timing
    clock = new THREE.Clock();
    
    // Create space environment
    createStarfield();
    createNebulae();
    createDistantPlanets();
    
    // Create player
    createPlayer();
    
    // Lighting
    setupLighting();
    
    // Event listeners
    setupEventListeners();
    
    // Start render loop
    animate();
}

// ========== SPACE ENVIRONMENT ==========
function createStarfield() {
    // Multiple layers of stars for depth
    const starLayers = [
        { count: 2000, size: 0.5, distance: 500, speed: 0.1 },
        { count: 1500, size: 0.8, distance: 400, speed: 0.15 },
        { count: 1000, size: 1.2, distance: 300, speed: 0.2 },
        { count: 500, size: 1.5, distance: 200, speed: 0.25 }
    ];
    
    starLayers.forEach(layer => {
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];
        
        for (let i = 0; i < layer.count; i++) {
            const x = (Math.random() - 0.5) * layer.distance * 2;
            const y = (Math.random() - 0.5) * layer.distance * 2;
            const z = (Math.random() - 0.5) * layer.distance * 2;
            positions.push(x, y, z);
            
            // Varied star colors
            const colorChoice = Math.random();
            if (colorChoice < 0.7) {
                colors.push(1, 1, 1); // White
            } else if (colorChoice < 0.8) {
                colors.push(0.8, 0.9, 1); // Blue-white
            } else if (colorChoice < 0.9) {
                colors.push(1, 0.9, 0.7); // Yellow
            } else {
                colors.push(1, 0.7, 0.7); // Red
            }
        }
        
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: layer.size,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true
        });
        
        const starField = new THREE.Points(geometry, material);
        starField.userData = { speed: layer.speed };
        stars.push(starField);
        scene.add(starField);
    });
}

function createNebulae() {
    // Create colorful nebula clouds
    const nebulaColors = [
        0xff00ff, // Magenta
        0x00ffff, // Cyan
        0xff4400, // Orange
        0x4400ff, // Purple
        0x00ff44  // Green
    ];
    
    for (let i = 0; i < 8; i++) {
        const geometry = new THREE.SphereGeometry(30 + Math.random() * 50, 16, 16);
        const color = nebulaColors[Math.floor(Math.random() * nebulaColors.length)];
        
        const material = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.03 + Math.random() * 0.05,
            side: THREE.DoubleSide
        });
        
        const nebula = new THREE.Mesh(geometry, material);
        nebula.position.set(
            (Math.random() - 0.5) * 400,
            (Math.random() - 0.5) * 200,
            -200 - Math.random() * 300
        );
        nebula.scale.set(
            1 + Math.random(),
            0.5 + Math.random() * 0.5,
            1 + Math.random()
        );
        
        nebulae.push(nebula);
        scene.add(nebula);
    }
}

function createDistantPlanets() {
    const planetData = [
        { radius: 15, color: 0xff6644, rings: true, pos: [-150, 30, -300] },
        { radius: 25, color: 0x4466ff, rings: false, pos: [200, -50, -400] },
        { radius: 10, color: 0x44ff66, rings: false, pos: [-80, 80, -350] },
        { radius: 20, color: 0xffaa44, rings: true, pos: [120, -20, -280] }
    ];
    
    planetData.forEach(data => {
        // Planet body
        const geometry = new THREE.SphereGeometry(data.radius, 32, 32);
        const material = new THREE.MeshStandardMaterial({
            color: data.color,
            roughness: 0.8,
            metalness: 0.2,
            emissive: data.color,
            emissiveIntensity: 0.1
        });
        
        const planet = new THREE.Mesh(geometry, material);
        planet.position.set(...data.pos);
        
        // Add rings if specified
        if (data.rings) {
            const ringGeometry = new THREE.RingGeometry(data.radius * 1.5, data.radius * 2.2, 64);
            const ringMaterial = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.3,
                side: THREE.DoubleSide
            });
            const rings = new THREE.Mesh(ringGeometry, ringMaterial);
            rings.rotation.x = Math.PI / 2.5;
            planet.add(rings);
        }
        
        planets.push(planet);
        scene.add(planet);
    });
}

// ========== PLAYER CREATION ==========
function createPlayer() {
    playerGroup = new THREE.Group();
    
    // Main body - sleek triangular shape
    const bodyGeometry = new THREE.ConeGeometry(1, 4, 4);
    const bodyMaterial = new THREE.MeshStandardMaterial({
        color: 0x00aaff,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0x0044ff,
        emissiveIntensity: 0.3
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.rotation.x = Math.PI / 2;
    playerGroup.add(body);
    
    // Cockpit
    const cockpitGeometry = new THREE.SphereGeometry(0.5, 16, 16);
    const cockpitMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        metalness: 0.9,
        roughness: 0.1,
        emissive: 0x00ffff,
        emissiveIntensity: 0.5
    });
    const cockpit = new THREE.Mesh(cockpitGeometry, cockpitMaterial);
    cockpit.position.set(0, 0.3, 0.5);
    cockpit.scale.set(1, 0.6, 1);
    playerGroup.add(cockpit);
    
    // Wings
    const wingGeometry = new THREE.BoxGeometry(4, 0.1, 1.5);
    const wingMaterial = new THREE.MeshStandardMaterial({
        color: 0x0066cc,
        metalness: 0.7,
        roughness: 0.3,
        emissive: 0x003366,
        emissiveIntensity: 0.2
    });
    const wings = new THREE.Mesh(wingGeometry, wingMaterial);
    wings.position.set(0, 0, 0.5);
    playerGroup.add(wings);
    
    // Wing tips (glowing)
    const tipGeometry = new THREE.SphereGeometry(0.15, 8, 8);
    const tipMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.8
    });
    
    const leftTip = new THREE.Mesh(tipGeometry, tipMaterial);
    leftTip.position.set(-2, 0, 0.5);
    playerGroup.add(leftTip);
    
    const rightTip = new THREE.Mesh(tipGeometry, tipMaterial);
    rightTip.position.set(2, 0, 0.5);
    playerGroup.add(rightTip);
    
    // Engine glow
    const engineGeometry = new THREE.ConeGeometry(0.4, 1.5, 8);
    const engineMaterial = new THREE.MeshBasicMaterial({
        color: 0xff4400,
        transparent: true,
        opacity: 0.8
    });
    const engine = new THREE.Mesh(engineGeometry, engineMaterial);
    engine.rotation.x = -Math.PI / 2;
    engine.position.set(0, 0, 2.5);
    engine.name = 'engine';
    playerGroup.add(engine);
    
    // Add point light for engine glow
    const engineLight = new THREE.PointLight(0xff4400, 2, 10);
    engineLight.position.set(0, 0, 3);
    playerGroup.add(engineLight);
    
    playerGroup.position.set(0, 0, 0);
    player = playerGroup;
    scene.add(playerGroup);
}

// ========== LIGHTING ==========
function setupLighting() {
    // Ambient light
    const ambient = new THREE.AmbientLight(0x222244, 0.5);
    scene.add(ambient);
    
    // Main directional light (sun)
    const sunLight = new THREE.DirectionalLight(0xffffee, 1);
    sunLight.position.set(50, 100, -100);
    scene.add(sunLight);
    
    // Colored rim lights for dramatic effect
    const rimLight1 = new THREE.DirectionalLight(0xff00ff, 0.3);
    rimLight1.position.set(-50, 0, 0);
    scene.add(rimLight1);
    
    const rimLight2 = new THREE.DirectionalLight(0x00ffff, 0.3);
    rimLight2.position.set(50, 0, 0);
    scene.add(rimLight2);
}

// ========== ENEMY CREATION ==========
function createEnemy(type, position) {
    const enemyGroup = new THREE.Group();
    
    let health, speed, scoreValue, scale;
    
    switch(type) {
        case 'scout':
            // Fast, small triangular ship
            health = 25;
            speed = CONFIG.enemyBaseSpeed * 2 + (currentWave * CONFIG.enemySpeedIncrement);
            scoreValue = 100;
            scale = 0.8;
            
            const scoutBody = new THREE.Mesh(
                new THREE.ConeGeometry(0.6, 2, 3),
                new THREE.MeshStandardMaterial({
                    color: 0xff0044,
                    emissive: 0xff0022,
                    emissiveIntensity: 0.5,
                    metalness: 0.7,
                    roughness: 0.3
                })
            );
            scoutBody.rotation.x = -Math.PI / 2;
            enemyGroup.add(scoutBody);
            break;
            
        case 'fighter':
            // Medium enemy with wings
            health = 50;
            speed = CONFIG.enemyBaseSpeed * 1.5 + (currentWave * CONFIG.enemySpeedIncrement);
            scoreValue = 200;
            scale = 1;
            
            const fighterBody = new THREE.Mesh(
                new THREE.OctahedronGeometry(1),
                new THREE.MeshStandardMaterial({
                    color: 0xff6600,
                    emissive: 0xff3300,
                    emissiveIntensity: 0.4,
                    metalness: 0.6,
                    roughness: 0.4
                })
            );
            enemyGroup.add(fighterBody);
            
            const fighterWing = new THREE.Mesh(
                new THREE.BoxGeometry(3, 0.1, 0.8),
                new THREE.MeshStandardMaterial({
                    color: 0xcc4400,
                    metalness: 0.7,
                    roughness: 0.3
                })
            );
            enemyGroup.add(fighterWing);
            break;
            
        case 'heavy':
            // Large, slow, tanky
            health = 150;
            speed = CONFIG.enemyBaseSpeed + (currentWave * CONFIG.enemySpeedIncrement * 0.5);
            scoreValue = 500;
            scale = 1.5;
            
            const heavyBody = new THREE.Mesh(
                new THREE.DodecahedronGeometry(1.2),
                new THREE.MeshStandardMaterial({
                    color: 0x8800ff,
                    emissive: 0x4400aa,
                    emissiveIntensity: 0.4,
                    metalness: 0.8,
                    roughness: 0.2
                })
            );
            enemyGroup.add(heavyBody);
            
            // Armor plates
            for (let i = 0; i < 4; i++) {
                const plate = new THREE.Mesh(
                    new THREE.BoxGeometry(0.3, 0.3, 1.5),
                    new THREE.MeshStandardMaterial({
                        color: 0x6600cc,
                        metalness: 0.9,
                        roughness: 0.1
                    })
                );
                plate.position.x = Math.cos(i * Math.PI / 2) * 1.3;
                plate.position.y = Math.sin(i * Math.PI / 2) * 1.3;
                enemyGroup.add(plate);
            }
            break;
            
        case 'boss':
            // Boss enemy
            health = 500 + (currentWave * 100);
            speed = CONFIG.enemyBaseSpeed * 0.5;
            scoreValue = 2000;
            scale = 3;
            
            const bossBody = new THREE.Mesh(
                new THREE.IcosahedronGeometry(2),
                new THREE.MeshStandardMaterial({
                    color: 0xff0000,
                    emissive: 0xaa0000,
                    emissiveIntensity: 0.6,
                    metalness: 0.9,
                    roughness: 0.1
                })
            );
            enemyGroup.add(bossBody);
            
            // Boss core
            const bossCore = new THREE.Mesh(
                new THREE.SphereGeometry(0.8, 16, 16),
                new THREE.MeshBasicMaterial({
                    color: 0xffff00,
                    transparent: true,
                    opacity: 0.8
                })
            );
            enemyGroup.add(bossCore);
            
            // Rotating rings
            for (let i = 0; i < 3; i++) {
                const ring = new THREE.Mesh(
                    new THREE.TorusGeometry(2.5 + i * 0.5, 0.1, 8, 32),
                    new THREE.MeshBasicMaterial({
                        color: 0xff4400,
                        transparent: true,
                        opacity: 0.6
                    })
                );
                ring.rotation.x = Math.random() * Math.PI;
                ring.rotation.y = Math.random() * Math.PI;
                ring.userData.rotationSpeed = { x: 0.01 + Math.random() * 0.02, y: 0.01 + Math.random() * 0.02 };
                enemyGroup.add(ring);
            }
            break;
    }
    
    // Add glow effect
    const glowLight = new THREE.PointLight(0xff0000, 1, 5);
    enemyGroup.add(glowLight);
    
    enemyGroup.position.copy(position);
    enemyGroup.scale.setScalar(scale);
    
    enemyGroup.userData = {
        type: type,
        health: health,
        maxHealth: health,
        speed: speed,
        scoreValue: scoreValue,
        lastShot: 0,
        shootInterval: type === 'boss' ? 500 : 1500 + Math.random() * 1000
    };
    
    scene.add(enemyGroup);
    enemies.push(enemyGroup);
    
    return enemyGroup;
}

// ========== ASTEROID CREATION ==========
function createAsteroid(position) {
    const geometry = new THREE.DodecahedronGeometry(1 + Math.random() * 2, 0);
    const material = new THREE.MeshStandardMaterial({
        color: 0x666666,
        roughness: 0.9,
        metalness: 0.1
    });
    
    const asteroid = new THREE.Mesh(geometry, material);
    asteroid.position.copy(position);
    asteroid.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
    );
    
    asteroid.userData = {
        rotationSpeed: {
            x: (Math.random() - 0.5) * 0.02,
            y: (Math.random() - 0.5) * 0.02,
            z: (Math.random() - 0.5) * 0.02
        },
        speed: 0.05 + Math.random() * 0.1,
        health: 30
    };
    
    scene.add(asteroid);
    asteroids.push(asteroid);
    
    return asteroid;
}

// ========== PROJECTILES ==========
function fireLaser() {
    const now = Date.now();
    if (now - lastFireTime < CONFIG.fireRate) return;
    lastFireTime = now;
    shotsFired++;
    
    // Create laser
    const laserGeometry = new THREE.CylinderGeometry(0.05, 0.05, 2, 8);
    const laserMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.9
    });
    
    const laser = new THREE.Mesh(laserGeometry, laserMaterial);
    laser.rotation.x = Math.PI / 2;
    
    // Position at player
    laser.position.copy(player.position);
    laser.position.z -= 3;
    
    // Direction towards crosshair position in 3D
    const direction = new THREE.Vector3(
        (mouse.x - 0.5) * 2,
        (0.5 - mouse.y) * 2,
        -1
    ).normalize();
    
    laser.userData = {
        velocity: direction.multiplyScalar(CONFIG.laserSpeed),
        damage: CONFIG.laserDamage
    };
    
    // Add glow
    const glowLight = new THREE.PointLight(0x00ffff, 0.5, 3);
    laser.add(glowLight);
    
    scene.add(laser);
    lasers.push(laser);
    
    // Muzzle flash effect
    createMuzzleFlash(player.position.clone().add(new THREE.Vector3(0, 0, -2)));
}

function fireSpecial() {
    if (playerEnergy < CONFIG.specialCost || !specialReady) return;
    
    playerEnergy -= CONFIG.specialCost;
    specialReady = false;
    
    // Create expanding ring
    const ringGeometry = new THREE.RingGeometry(0.5, 1, 32);
    const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xff00ff,
        transparent: true,
        opacity: 1,
        side: THREE.DoubleSide
    });
    
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.position.copy(player.position);
    ring.position.z -= 2;
    
    ring.userData = {
        type: 'special',
        age: 0,
        maxAge: 60,
        damage: CONFIG.specialDamage
    };
    
    scene.add(ring);
    lasers.push(ring);
    
    // Screen flash
    createScreenFlash(0xff00ff);
    
    // Recharge special
    setTimeout(() => {
        specialReady = true;
        hudElements.specialIndicator.classList.add('ready');
    }, 5000);
    
    hudElements.specialIndicator.classList.remove('ready');
}

function createEnemyLaser(enemy) {
    const laserGeometry = new THREE.SphereGeometry(0.2, 8, 8);
    const laserMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        transparent: true,
        opacity: 0.9
    });
    
    const laser = new THREE.Mesh(laserGeometry, laserMaterial);
    laser.position.copy(enemy.position);
    
    // Direction towards player
    const direction = new THREE.Vector3()
        .subVectors(player.position, enemy.position)
        .normalize();
    
    laser.userData = {
        velocity: direction.multiplyScalar(0.5),
        damage: 10,
        isEnemy: true
    };
    
    const glowLight = new THREE.PointLight(0xff0000, 0.3, 2);
    laser.add(glowLight);
    
    scene.add(laser);
    lasers.push(laser);
}

// ========== PARTICLE EFFECTS ==========
function createExplosion(position, color = 0xff4400, count = 30) {
    for (let i = 0; i < count; i++) {
        const geometry = new THREE.SphereGeometry(0.1 + Math.random() * 0.2, 4, 4);
        const material = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 1
        });
        
        const particle = new THREE.Mesh(geometry, material);
        particle.position.copy(position);
        
        particle.userData = {
            velocity: new THREE.Vector3(
                (Math.random() - 0.5) * 0.5,
                (Math.random() - 0.5) * 0.5,
                (Math.random() - 0.5) * 0.5
            ),
            age: 0,
            maxAge: 30 + Math.random() * 30
        };
        
        scene.add(particle);
        particles.push(particle);
    }
    
    // Add flash light
    const flash = new THREE.PointLight(color, 5, 20);
    flash.position.copy(position);
    flash.userData = { age: 0, maxAge: 10 };
    scene.add(flash);
    particles.push(flash);
}

function createMuzzleFlash(position) {
    const flash = new THREE.PointLight(0x00ffff, 3, 5);
    flash.position.copy(position);
    flash.userData = { age: 0, maxAge: 5 };
    scene.add(flash);
    particles.push(flash);
}

function createScreenFlash(color) {
    const flash = document.createElement('div');
    flash.className = 'damage-flash';
    flash.style.background = `radial-gradient(ellipse at center, transparent 0%, rgba(${
        (color >> 16) & 255
    }, ${(color >> 8) & 255}, ${color & 255}, 0.4) 100%)`;
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 200);
}

// ========== WAVE SYSTEM ==========
function startWave(waveNumber) {
    currentWave = waveNumber;
    waveScore = 0;
    enemiesDestroyed = 0;
    shotsFired = 0;
    shotsHit = 0;
    
    hudElements.waveNum.textContent = waveNumber;
    
    // Clear existing enemies and asteroids
    enemies.forEach(e => scene.remove(e));
    enemies = [];
    asteroids.forEach(a => scene.remove(a));
    asteroids = [];
    
    // Spawn enemies based on wave
    const enemyCount = 5 + waveNumber * 3;
    const spawnRadius = 50;
    
    for (let i = 0; i < enemyCount; i++) {
        const type = getRandomEnemyType(waveNumber);
        const position = new THREE.Vector3(
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 20,
            -30 - Math.random() * spawnRadius
        );
        createEnemy(type, position);
    }
    
    // Spawn boss every 5 waves
    if (waveNumber % 5 === 0) {
        createEnemy('boss', new THREE.Vector3(0, 0, -80));
    }
    
    // Spawn asteroids
    const asteroidCount = 3 + waveNumber;
    for (let i = 0; i < asteroidCount; i++) {
        createAsteroid(new THREE.Vector3(
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 30,
            -20 - Math.random() * 80
        ));
    }
    
    updateHUD();
}

function getRandomEnemyType(wave) {
    const rand = Math.random();
    if (wave < 3) {
        return rand < 0.7 ? 'scout' : 'fighter';
    } else if (wave < 6) {
        if (rand < 0.4) return 'scout';
        if (rand < 0.8) return 'fighter';
        return 'heavy';
    } else {
        if (rand < 0.3) return 'scout';
        if (rand < 0.6) return 'fighter';
        return 'heavy';
    }
}

function checkWaveComplete() {
    if (enemies.length === 0 && currentState === GameState.PLAYING) {
        showWaveComplete();
    }
}

function showWaveComplete() {
    currentState = GameState.WAVE_COMPLETE;
    
    document.getElementById('stat-enemies').textContent = enemiesDestroyed;
    document.getElementById('stat-score').textContent = waveScore;
    document.getElementById('stat-accuracy').textContent = 
        shotsFired > 0 ? Math.round((shotsHit / shotsFired) * 100) + '%' : '0%';
    
    screens.waveComplete.classList.add('active');
    screens.hud.classList.add('hidden');
}

// ========== COLLISION DETECTION ==========
function checkCollisions() {
    // Lasers vs Enemies
    for (let i = lasers.length - 1; i >= 0; i--) {
        const laser = lasers[i];
        
        if (laser.userData.isEnemy) {
            // Enemy laser vs Player
            const distToPlayer = laser.position.distanceTo(player.position);
            if (distToPlayer < 2) {
                takeDamage(laser.userData.damage);
                scene.remove(laser);
                lasers.splice(i, 1);
                continue;
            }
        } else if (laser.userData.type === 'special') {
            // Special weapon - damages all nearby enemies
            for (let j = enemies.length - 1; j >= 0; j--) {
                const enemy = enemies[j];
                const dist = laser.position.distanceTo(enemy.position);
                if (dist < laser.scale.x * 5) {
                    damageEnemy(enemy, laser.userData.damage);
                }
            }
        } else {
            // Player laser vs Enemies
            for (let j = enemies.length - 1; j >= 0; j--) {
                const enemy = enemies[j];
                const dist = laser.position.distanceTo(enemy.position);
                const hitRadius = enemy.userData.type === 'boss' ? 4 : 1.5;
                
                if (dist < hitRadius) {
                    damageEnemy(enemy, laser.userData.damage);
                    shotsHit++;
                    scene.remove(laser);
                    lasers.splice(i, 1);
                    break;
                }
            }
            
            // Player laser vs Asteroids
            for (let j = asteroids.length - 1; j >= 0; j--) {
                const asteroid = asteroids[j];
                const dist = laser.position.distanceTo(asteroid.position);
                
                if (dist < 2) {
                    asteroid.userData.health -= laser.userData.damage;
                    if (asteroid.userData.health <= 0) {
                        createExplosion(asteroid.position, 0x888888, 15);
                        scene.remove(asteroid);
                        asteroids.splice(j, 1);
                        score += 25;
                        waveScore += 25;
                    }
                    scene.remove(laser);
                    lasers.splice(i, 1);
                    break;
                }
            }
        }
    }
    
    // Player vs Asteroids
    for (let i = asteroids.length - 1; i >= 0; i--) {
        const asteroid = asteroids[i];
        const dist = asteroid.position.distanceTo(player.position);
        
        if (dist < 3) {
            takeDamage(20);
            createExplosion(asteroid.position, 0x888888, 15);
            scene.remove(asteroid);
            asteroids.splice(i, 1);
        }
    }
    
    // Player vs Enemies (collision)
    for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        const dist = enemy.position.distanceTo(player.position);
        const collisionRadius = enemy.userData.type === 'boss' ? 5 : 2;
        
        if (dist < collisionRadius) {
            takeDamage(30);
            damageEnemy(enemy, 50);
        }
    }
}

function damageEnemy(enemy, damage) {
    enemy.userData.health -= damage;
    
    // Flash effect
    enemy.children.forEach(child => {
        if (child.material && child.material.emissive) {
            child.material.emissive.setHex(0xffffff);
            setTimeout(() => {
                child.material.emissive.setHex(0xff0022);
            }, 50);
        }
    });
    
    if (enemy.userData.health <= 0) {
        // Enemy destroyed
        createExplosion(enemy.position, 0xff4400, enemy.userData.type === 'boss' ? 100 : 30);
        score += enemy.userData.scoreValue;
        waveScore += enemy.userData.scoreValue;
        enemiesDestroyed++;
        
        const index = enemies.indexOf(enemy);
        if (index > -1) {
            enemies.splice(index, 1);
        }
        scene.remove(enemy);
        
        checkWaveComplete();
    }
    
    updateHUD();
}

function takeDamage(damage) {
    playerHealth -= damage;
    
    if (playerHealth <= 0) {
        playerHealth = 0;
        gameOver();
    }
    
    // Screen shake & flash
    createScreenFlash(0xff0000);
    
    updateHUD();
}

// ========== UPDATE FUNCTIONS ==========
function updatePlayer() {
    if (currentState !== GameState.PLAYING) return;
    
    // Mouse steering
    const targetX = (mouse.x - 0.5) * CONFIG.worldBoundary;
    const targetY = (0.5 - mouse.y) * CONFIG.worldBoundary * 0.6;
    
    player.position.x += (targetX - player.position.x) * CONFIG.playerSpeed;
    player.position.y += (targetY - player.position.y) * CONFIG.playerSpeed;
    
    // Keyboard strafe
    if (keys['a'] || keys['arrowleft']) {
        player.position.x -= CONFIG.playerStrafeSpeed;
    }
    if (keys['d'] || keys['arrowright']) {
        player.position.x += CONFIG.playerStrafeSpeed;
    }
    if (keys['w'] || keys['arrowup']) {
        player.position.y += CONFIG.playerStrafeSpeed * 0.5;
    }
    if (keys['s'] || keys['arrowdown']) {
        player.position.y -= CONFIG.playerStrafeSpeed * 0.5;
    }
    
    // Clamp position
    player.position.x = Math.max(-CONFIG.worldBoundary, Math.min(CONFIG.worldBoundary, player.position.x));
    player.position.y = Math.max(-CONFIG.worldBoundary * 0.5, Math.min(CONFIG.worldBoundary * 0.5, player.position.y));
    
    // Tilt based on movement
    player.rotation.z = -player.position.x * 0.02;
    player.rotation.x = player.position.y * 0.01;
    
    // Engine pulse
    const engine = player.getObjectByName('engine');
    if (engine) {
        engine.scale.z = 1 + Math.sin(Date.now() * 0.01) * 0.2;
    }
    
    // Energy regeneration
    if (playerEnergy < CONFIG.playerEnergy) {
        playerEnergy = Math.min(CONFIG.playerEnergy, playerEnergy + CONFIG.energyRegenRate);
        updateHUD();
    }
    
    // Check for special ready
    if (specialReady && playerEnergy >= CONFIG.specialCost) {
        hudElements.specialIndicator.classList.add('ready');
    } else {
        hudElements.specialIndicator.classList.remove('ready');
    }
}

function updateEnemies() {
    if (currentState !== GameState.PLAYING) return;
    
    enemies.forEach(enemy => {
        // Move towards player (on-rails effect)
        enemy.position.z += enemy.userData.speed + CONFIG.forwardSpeed;
        
        // Slight tracking towards player
        const dx = player.position.x - enemy.position.x;
        const dy = player.position.y - enemy.position.y;
        enemy.position.x += dx * 0.005;
        enemy.position.y += dy * 0.003;
        
        // Rotate towards player
        enemy.lookAt(player.position);
        
        // Boss rotation effect
        if (enemy.userData.type === 'boss') {
            enemy.children.forEach(child => {
                if (child.userData.rotationSpeed) {
                    child.rotation.x += child.userData.rotationSpeed.x;
                    child.rotation.y += child.userData.rotationSpeed.y;
                }
            });
        }
        
        // Enemy shooting
        const now = Date.now();
        if (now - enemy.userData.lastShot > enemy.userData.shootInterval && enemy.position.z > -40) {
            enemy.userData.lastShot = now;
            createEnemyLaser(enemy);
        }
        
        // Remove if too far behind
        if (enemy.position.z > 20) {
            const index = enemies.indexOf(enemy);
            if (index > -1) {
                enemies.splice(index, 1);
            }
            scene.remove(enemy);
            checkWaveComplete();
        }
    });
}

function updateAsteroids() {
    asteroids.forEach(asteroid => {
        asteroid.position.z += asteroid.userData.speed + CONFIG.forwardSpeed;
        asteroid.rotation.x += asteroid.userData.rotationSpeed.x;
        asteroid.rotation.y += asteroid.userData.rotationSpeed.y;
        asteroid.rotation.z += asteroid.userData.rotationSpeed.z;
        
        // Remove if too far behind
        if (asteroid.position.z > 30) {
            const index = asteroids.indexOf(asteroid);
            if (index > -1) {
                asteroids.splice(index, 1);
            }
            scene.remove(asteroid);
        }
    });
    
    // Spawn new asteroids
    if (Math.random() < 0.01 && currentState === GameState.PLAYING) {
        createAsteroid(new THREE.Vector3(
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 30,
            -100
        ));
    }
}

function updateLasers() {
    for (let i = lasers.length - 1; i >= 0; i--) {
        const laser = lasers[i];
        
        if (laser.userData.type === 'special') {
            // Expand special ring
            laser.userData.age++;
            laser.scale.x += 0.5;
            laser.scale.y += 0.5;
            laser.material.opacity -= 0.02;
            
            if (laser.userData.age > laser.userData.maxAge) {
                scene.remove(laser);
                lasers.splice(i, 1);
            }
        } else {
            // Normal laser movement
            laser.position.add(laser.userData.velocity);
            
            // Remove if too far
            if (laser.position.z < -100 || laser.position.z > 50 ||
                Math.abs(laser.position.x) > 100 || Math.abs(laser.position.y) > 100) {
                scene.remove(laser);
                lasers.splice(i, 1);
            }
        }
    }
}

function updateParticles() {
    for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.userData.age++;
        
        if (particle.userData.velocity) {
            particle.position.add(particle.userData.velocity);
            particle.userData.velocity.multiplyScalar(0.95);
        }
        
        if (particle.material) {
            particle.material.opacity = 1 - (particle.userData.age / particle.userData.maxAge);
        }
        
        if (particle.isLight) {
            particle.intensity = 5 * (1 - particle.userData.age / particle.userData.maxAge);
        }
        
        if (particle.userData.age >= particle.userData.maxAge) {
            scene.remove(particle);
            particles.splice(i, 1);
        }
    }
}

function updateEnvironment() {
    // Move stars for flying effect
    stars.forEach(starField => {
        starField.rotation.z += 0.0001;
        const positions = starField.geometry.attributes.position.array;
        for (let i = 2; i < positions.length; i += 3) {
            positions[i] += starField.userData.speed;
            if (positions[i] > 300) {
                positions[i] = -300;
            }
        }
        starField.geometry.attributes.position.needsUpdate = true;
    });
    
    // Subtle nebula movement
    nebulae.forEach((nebula, i) => {
        nebula.rotation.z += 0.0002;
        nebula.position.z += 0.02;
        if (nebula.position.z > 50) {
            nebula.position.z = -400;
            nebula.position.x = (Math.random() - 0.5) * 400;
            nebula.position.y = (Math.random() - 0.5) * 200;
        }
    });
    
    // Rotate planets slowly
    planets.forEach(planet => {
        planet.rotation.y += 0.001;
    });
}

function updateHUD() {
    const healthPercent = (playerHealth / CONFIG.playerHealth) * 100;
    const energyPercent = (playerEnergy / CONFIG.playerEnergy) * 100;
    
    hudElements.healthFill.style.width = healthPercent + '%';
    hudElements.healthText.textContent = Math.round(healthPercent) + '%';
    
    hudElements.energyFill.style.width = energyPercent + '%';
    hudElements.energyText.textContent = Math.round(energyPercent) + '%';
    
    hudElements.score.textContent = score.toLocaleString();
    hudElements.enemiesLeft.textContent = enemies.length;
}

function updateCrosshair() {
    hudElements.crosshair.style.left = (mouse.x * window.innerWidth) + 'px';
    hudElements.crosshair.style.top = (mouse.y * window.innerHeight) + 'px';
}

// ========== GAME STATE MANAGEMENT ==========
function startGame() {
    currentState = GameState.PLAYING;
    score = 0;
    playerHealth = CONFIG.playerHealth;
    playerEnergy = CONFIG.playerEnergy;
    specialReady = true;
    
    // Reset player position
    player.position.set(0, 0, 0);
    player.rotation.set(0, 0, 0);
    
    // Clear any existing entities
    lasers.forEach(l => scene.remove(l));
    lasers = [];
    particles.forEach(p => scene.remove(p));
    particles = [];
    
    screens.mainMenu.classList.remove('active');
    screens.hud.classList.remove('hidden');
    hudElements.specialIndicator.classList.add('ready');
    
    startWave(1);
}

function nextWave() {
    currentState = GameState.PLAYING;
    screens.waveComplete.classList.remove('active');
    screens.hud.classList.remove('hidden');
    
    // Restore some health between waves
    playerHealth = Math.min(CONFIG.playerHealth, playerHealth + 25);
    updateHUD();
    
    startWave(currentWave + 1);
}

function pauseGame() {
    if (currentState === GameState.PLAYING) {
        currentState = GameState.PAUSED;
        screens.pause.classList.add('active');
    }
}

function resumeGame() {
    if (currentState === GameState.PAUSED) {
        currentState = GameState.PLAYING;
        screens.pause.classList.remove('active');
    }
}

function gameOver() {
    currentState = GameState.GAME_OVER;
    
    document.getElementById('final-score').textContent = score.toLocaleString();
    document.getElementById('waves-survived').textContent = currentWave;
    
    screens.hud.classList.add('hidden');
    screens.gameOver.classList.add('active');
    
    createExplosion(player.position, 0x00ffff, 50);
}

function returnToMenu() {
    currentState = GameState.MENU;
    
    screens.gameOver.classList.remove('active');
    screens.pause.classList.remove('active');
    screens.waveComplete.classList.remove('active');
    screens.hud.classList.add('hidden');
    screens.mainMenu.classList.add('active');
    
    // Clear entities
    enemies.forEach(e => scene.remove(e));
    enemies = [];
    asteroids.forEach(a => scene.remove(a));
    asteroids = [];
    lasers.forEach(l => scene.remove(l));
    lasers = [];
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Mouse movement
    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX / window.innerWidth;
        mouse.y = e.clientY / window.innerHeight;
        updateCrosshair();
    });
    
    // Mouse click - fire
    document.addEventListener('mousedown', (e) => {
        if (e.button === 0 && currentState === GameState.PLAYING) {
            fireLaser();
        }
    });
    
    // Continuous fire while holding
    document.addEventListener('mousedown', function startFiring(e) {
        if (e.button === 0) {
            const fireInterval = setInterval(() => {
                if (currentState === GameState.PLAYING) {
                    fireLaser();
                }
            }, CONFIG.fireRate);
            
            document.addEventListener('mouseup', function stopFiring() {
                clearInterval(fireInterval);
                document.removeEventListener('mouseup', stopFiring);
            });
        }
    });
    
    // Keyboard
    document.addEventListener('keydown', (e) => {
        keys[e.key.toLowerCase()] = true;
        
        if (e.key === ' ' && currentState === GameState.PLAYING) {
            e.preventDefault();
            fireSpecial();
        }
        
        if (e.key.toLowerCase() === 'p') {
            if (currentState === GameState.PLAYING) {
                pauseGame();
            } else if (currentState === GameState.PAUSED) {
                resumeGame();
            }
        }
    });
    
    document.addEventListener('keyup', (e) => {
        keys[e.key.toLowerCase()] = false;
    });
    
    // Window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Button listeners
    document.getElementById('start-btn').addEventListener('click', startGame);
    document.getElementById('instructions-btn').addEventListener('click', () => {
        screens.mainMenu.classList.remove('active');
        screens.instructions.classList.add('active');
    });
    document.getElementById('back-btn').addEventListener('click', () => {
        screens.instructions.classList.remove('active');
        screens.mainMenu.classList.add('active');
    });
    document.getElementById('next-wave-btn').addEventListener('click', nextWave);
    document.getElementById('restart-btn').addEventListener('click', startGame);
    document.getElementById('menu-btn').addEventListener('click', returnToMenu);
    document.getElementById('resume-btn').addEventListener('click', resumeGame);
    document.getElementById('quit-btn').addEventListener('click', returnToMenu);
    
    // Prevent context menu
    document.addEventListener('contextmenu', (e) => e.preventDefault());
}

// ========== ANIMATION LOOP ==========
function animate() {
    requestAnimationFrame(animate);
    
    if (currentState === GameState.PLAYING) {
        updatePlayer();
        updateEnemies();
        updateAsteroids();
        updateLasers();
        updateParticles();
        checkCollisions();
    }
    
    updateEnvironment();
    
    // Camera follows player slightly
    camera.position.x = player.position.x * 0.3;
    camera.position.y = 5 + player.position.y * 0.2;
    camera.lookAt(player.position.x * 0.5, player.position.y * 0.3, -50);
    
    renderer.render(scene, camera);
}

// ========== START GAME ==========
init();
