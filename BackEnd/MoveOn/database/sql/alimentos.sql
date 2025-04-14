INSERT INTO alimento (nombre, categoria, imagen_url, descripcion, peso_kg, precio_euros, codigo_barras, calorias, proteinas, grasas, carbohidratos, created_at, updated_at)
VALUES
-- PROTEÍNAS
('Pechuga de pollo', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1744491053/apple_yp9s5w.webp', 'Fuente de proteína magra', 0.2, 1.5, '0001', 110, 23, 1, 0, NOW(), NOW()),
('Huevo', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1744491053/apple_yp9s5w.webp', 'Alimento completo en proteínas', 0.05, 0.25, '0002', 75, 6, 5, 0.5, NOW(), NOW()),
('Tofu', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1744491053/apple_yp9s5w.webp', 'Proteína vegetal', 0.15, 1.2, '0003', 130, 12, 7, 2, NOW(), NOW()),
('Lentejas cocidas', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1744491053/apple_yp9s5w.webp', 'Legumbre rica en proteína', 0.2, 0.5, '0004', 116, 9, 0.4, 20, NOW(), NOW()),
-- ...añadir 16 más

-- CARBOHIDRATOS
('Arroz integral', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1744491053/apple_yp9s5w.webp', 'Fuente compleja de carbohidratos', 0.2, 0.4, '0101', 130, 2.5, 1, 28, NOW(), NOW()),
('Pasta integral', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1744491053/apple_yp9s5w.webp', 'Carbohidratos lentos', 0.15, 0.6, '0102', 140, 5, 1, 30, NOW(), NOW()),
-- ...añadir 18 más

-- GRASAS
('Aguacate', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1744491053/apple_yp9s5w.webp', 'Grasa saludable vegetal', 0.2, 1, '0201', 160, 2, 15, 9, NOW(), NOW()),
('Aceite de oliva', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1744491053/apple_yp9s5w.webp', 'Grasa monoinsaturada', 0.1, 0.9, '0202', 884, 0, 100, 0, NOW(), NOW()),
-- ...añadir 18 más

-- VITAMINAS
('Zanahoria', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1744491053/apple_yp9s5w.webp', 'Rica en betacarotenos', 0.15, 0.2, '0301', 40, 1, 0.2, 9, NOW(), NOW()),
('Brócoli', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1744491053/apple_yp9s5w.webp', 'Verdura crucífera rica en C y K', 0.2, 0.4, '0302', 55, 4, 0.5, 10, NOW(), NOW());
-- ...añadir 18 más
