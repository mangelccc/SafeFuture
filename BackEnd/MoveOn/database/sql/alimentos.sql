INSERT INTO alimento (nombre, categoria, imagen_url, descripcion, peso_kg, precio_euros, codigo_barras, calorias, proteinas, grasas, carbohidratos, created_at, updated_at)
VALUES
-- PROTEÍNAS (20)
('Pechuga de pollo', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189561/pechuga-pollo_fthcra.webp', 'Fuente de proteína magra', 0.2, 1.5, '0001', 110, 23, 1, 0, NOW(), NOW()),
('Huevo', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189561/huevos_nbh8yb.webp', 'Alimento completo en proteínas', 0.05, 0.25, '0002', 75, 6, 5, 0.5, NOW(), NOW()),
('Tofu', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189562/tofu_s12zy6.webp', 'Proteína vegetal', 0.15, 1.2, '0003', 130, 12, 7, 2, NOW(), NOW()),
('Lentejas cocidas', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189561/lentejas_k7n7ho.webp', 'Legumbre rica en proteína', 0.2, 0.5, '0004', 116, 9, 0.4, 20, NOW(), NOW()),
('Salmón', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189561/salmon_zsym1n.webp', 'Pescado graso rico en omega-3', 0.15, 2.0, '0005', 280, 22, 18, 0, NOW(), NOW()),
('Merluza', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189561/merluza_ygixpc.webp', 'Pescado blanco bajo en grasa', 0.2, 1.8, '0006', 82, 18, 1, 0, NOW(), NOW()),
('Bacalao', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189561/bacalao_fpz0qj.webp', 'Pescado magro con alto aporte proteico', 0.15, 2.2, '0007', 105, 23, 1, 0, NOW(), NOW()),
('Pavo', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189561/pavo_gsmyqj.webp', 'Carne magra de ave', 0.2, 1.6, '0008', 200, 30, 5, 0, NOW(), NOW()),
('Ternera magra', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189561/ternera-magra_akyumv.webp', 'Carne roja magra', 0.2, 3.0, '0009', 250, 27, 15, 0, NOW(), NOW()),
('Atún en conserva', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/atun_unfqkt.webp', 'Fuente rápida de proteína', 0.1, 1.2, '0010', 116, 26, 1, 0, NOW(), NOW()),
('Garbanzos cocidos', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189546/garbanzos_39_11zon_pf2uys.webp', 'Legumbre rica en proteína y fibra', 0.2, 0.6, '0011', 164, 9, 3, 27, NOW(), NOW()),
('Frijoles negros cocidos', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189546/frijoles-negros_h8gfgd.webp', 'Legumbre con buen perfil proteico', 0.2, 0.4, '0012', 132, 9, 0.5, 24, NOW(), NOW()),
('Edamame', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/edamame_38_11zon_tljzzp.webp', 'Soja verde rica en proteína', 0.15, 1.5, '0013', 120, 12, 5, 9, NOW(), NOW()),
('Tempeh', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/tempeh_37_11zon_oswcvn.webp', 'Proteína fermentada de soja', 0.1, 1.7, '0014', 192, 19, 11, 9, NOW(), NOW()),
('Seitán', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189546/seitan_ayhqwk.webp', 'Proteína vegetal del gluten', 0.1, 1.4, '0015', 150, 25, 2, 3, NOW(), NOW()),
('Yogur griego natural', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189554/yogur-griego_36_11zon_jbgc1a.webp', 'Lácteo alto en proteínas', 0.15, 0.8, '0016', 130, 10, 8, 4, NOW(), NOW()),
('Queso fresco', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/queso-fresco_35_11zon_m71wpy.webp', 'Lácteo bajo en grasa', 0.1, 1.0, '0017', 98, 9, 6, 2, NOW(), NOW()),
('Requesón', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/rqueson_34_11zon_gl6g0b.webp', 'Lácteo suave con buena proteína', 0.1, 0.9, '0018', 106, 11, 5, 3, NOW(), NOW()),
('Huevos de codorniz (x5)', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/huevos-cordorniz_wuharh.webp', 'Pequeños, ricos en nutrientes', 0.05, 0.5, '0019', 72, 7, 5, 1, NOW(), NOW()),
('Cottage cheese', 'Proteínas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/cottage-cheese_h6xd7v.webp', 'Ricotta baja en grasa', 0.1, 0.9, '0020', 103, 12, 5, 3, NOW(), NOW()),

-- CARBOHIDRATOS (20)
('Arroz integral', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/arroz-integral_33_11zon_bomoif.webp', 'Fuente compleja de carbohidratos', 0.2, 0.4, '0101', 130, 2.5, 1, 28, NOW(), NOW()),
('Pasta integral', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189562/pasta-integral_tkuifl.webp', 'Carbohidratos lentos', 0.15, 0.6, '0102', 140, 5, 1, 30, NOW(), NOW()),
('Patata cocida', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/patata-cocida_v3xffr.webp', 'Fuente de absorción media', 0.2, 0.3, '0103', 154, 4, 0.2, 35, NOW(), NOW()),
('Boniato cocido', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/boniato-cocido_32_11zon_hbvtxn.webp', 'Fuente rica en betacaroteno', 0.2, 0.4, '0104', 180, 1.6, 0.2, 41, NOW(), NOW()),
('Pan integral (2 rebanadas)', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189550/pan-integral_31_11zon_o4oczt.webp', 'Fibra y carbohidratos', 0.06, 0.2, '0105', 166, 6, 2, 30, NOW(), NOW()),
('Avena (copos)', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/avena_30_11zon_c7ub71.webp', 'Fuente de beta‑glucanos', 0.05, 0.1, '0106', 195, 6.5, 3.3, 33.5, NOW(), NOW()),
('Mijo cocido', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189550/mijo_29_11zon_x0iexc.webp', 'Cereal sin gluten', 0.2, 0.5, '0107', 119, 3.5, 1, 23, NOW(), NOW()),
('Cebada perlada cocida', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/cebada-perlada_28_11zon_gcu1ua.webp', 'Fibra soluble y almidón resistente', 0.2, 0.5, '0108', 112, 2.3, 0.4, 28, NOW(), NOW()),
('Bulgur cocido', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/bulgur-cocido_cvdfob.webp', 'Trigo partido precocido', 0.2, 0.45, '0109', 83, 3.1, 0.2, 17.5, NOW(), NOW()),
('Trigo sarraceno cocido', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/trigo-sarraceno_27_11zon_bjcl5f.webp', 'Pseudocereal rico en fibra', 0.2, 0.6, '0110', 92, 3.4, 1, 19, NOW(), NOW()),
('Amaranto cocido', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/amaranto_snfont.webp', 'Pseudocereal nutritivo', 0.2, 0.6, '0111', 102, 3.8, 1.6, 19, NOW(), NOW()),
('Tortilla de trigo integral', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/tortilla-trigo_26_11zon_ogbsaa.webp', 'Wrap con fibra', 0.06, 0.3, '0112', 120, 4, 3, 18, NOW(), NOW()),
('Pan de centeno', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189550/pan-centeno_25_11zon_aucpx3.webp', 'Cereal integral con sabor intenso', 0.06, 0.25, '0113', 148, 5, 1.4, 28, NOW(), NOW()),
('Pasta blanca', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189551/pasta-blanca_24_11zon_z6qcvg.webp', 'Almidón de rápida absorción', 0.15, 0.6, '0114', 210, 7, 1.2, 42, NOW(), NOW()),
('Arroz blanco', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/arroz-blanco_23_11zon_hfmrjt.webp', 'Carbohidrato fácil de digerir', 0.2, 0.4, '0115', 205, 4.3, 0.4, 45, NOW(), NOW()),
('Galletas integrales (3 uds.)', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189548/galletas-integrales_22_11zon_wq95ja.webp', 'Snack con fibra', 0.03, 0.2, '0116', 120, 2, 4, 20, NOW(), NOW()),
('Plátano', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/platano_21_11zon_f1bcil.webp', 'Fruta rica en potasio', 0.12, 0.25, '0117', 105, 1.3, 0.4, 27, NOW(), NOW()),
('Manzana', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1744491053/apple_yp9s5w.webp', 'Fruta con fibra soluble', 0.15, 0.3, '0118', 95, 0.5, 0.3, 25, NOW(), NOW()),
('Pera', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189550/pera_20_11zon_li5jih.webp', 'Fruta jugosa y dulce', 0.15, 0.3, '0119', 101, 0.4, 0.2, 27, NOW(), NOW()),
('Naranja', 'Carbohidratos', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189550/naranja_19_11zon_rxt8cq.webp', 'Fruta cítrica rica en vitamina C', 0.2, 0.3, '0120', 86, 1.7, 0.2, 22, NOW(), NOW()),

-- GRASAS (20)
('Aguacate', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/aguacate_18_11zon_dkxa48.webp', 'Grasa saludable vegetal', 0.2, 1.0, '0201', 160, 2, 15, 9, NOW(), NOW()),
('Aceite de oliva', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/aceite-oliva_17_11zon_a5avms.webp', 'Grasa monoinsaturada', 0.0135, 0.12, '0202', 119, 0, 13.5, 0, NOW(), NOW()),
('Almendras', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/almendras_16_11zon_pu2fxs.webp', 'Fruta seca rica en vitamina E', 0.05, 0.8, '0203', 289, 10.6, 25.6, 10.4, NOW(), NOW()),
('Nueces', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/nueces_es2y2l.webp', 'Ricas en omega‑3 vegetales', 0.05, 0.7, '0204', 327, 15, 32, 4, NOW(), NOW()),
('Avellanas', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/avellanas_u6uoqn.webp', 'Fuente de grasas monoinsaturadas', 0.05, 0.6, '0205', 314, 7, 30, 7, NOW(), NOW()),
('Pistachos', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/pistachos_iyau6r.webp', 'Snacks ricos en proteínas y grasas', 0.05, 0.7, '0206', 289, 10, 24, 28, NOW(), NOW()),
('Semillas de girasol', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/semillas-girasol_m6xmii.webp', 'Ricas en vitamina E', 0.05, 0.5, '0207', 290, 10, 25, 20, NOW(), NOW()),
('Semillas de calabaza', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/semillas-calabaza_rqi8sc.webp', 'Fuente de magnesio y zinc', 0.05, 0.5, '0208', 271, 13, 23, 9, NOW(), NOW()),
('Semillas de lino', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/semillas-lino_c25hrl.webp', 'Ricas en omega‑3 y fibra', 0.05, 0.5, '0209', 265, 18.3, 13.8, 28.9, NOW(), NOW()),
('Semillas de chía', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189562/semillas-chia_lcnvml.webp', 'Alta densidad nutricional', 0.05, 0.6, '0210', 243, 8, 15, 21, NOW(), NOW()),
('Mantequilla de cacahuete', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/mantequilla-cacahuete_qhcye5.webp', 'Fuente de grasas y proteínas', 0.015, 0.15, '0211', 94, 4.2, 8, 3.4, NOW(), NOW()),
('Mantequilla de almendra', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/mantequilla-almendra_vyvkc2.webp', 'Grasas monoinsaturadas', 0.015, 0.18, '0212', 98, 3.2, 8.5, 3.4, NOW(), NOW()),
('Aceite de coco', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/aceite-coco_mmzszb.webp', 'Grasa saturada de coco', 0.0135, 0.12, '0213', 117, 0, 13, 0, NOW(), NOW()),
('Chocolate negro 85%', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189557/chocolate-negro_ee3aju.webp', 'Fuente de antioxidantes y grasas saludables', 0.03, 0.7, '0214', 180, 2, 15, 14, NOW(), NOW()),
('Tahini', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/tahini_15_11zon_fqdmmc.webp', 'Pasta de sésamo rica en calcio', 0.05, 0.5, '0215', 312, 8, 24, 16, NOW(), NOW()),
('Aceitunas verdes', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/aceitunas-verdes_14_11zon_githlr.webp', 'Snack bajo en calorías', 0.05, 0.4, '0216', 145, 1, 15, 3.8, NOW(), NOW()),
('Aceitunas negras', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/aceitunas-negras_13_11zon_wpguyc.webp', 'Fuente de ácido oleico', 0.05, 0.4, '0217', 155, 1.5, 16, 4, NOW(), NOW()),
('Yogur natural entero', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189556/yogur-natural-entero_12_11zon_pekzmk.webp', 'Lácteo con grasas beneficiosas', 0.15, 0.7, '0218', 95, 4, 5, 4, NOW(), NOW()),
('Queso manchego', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/queso-manchego_11_11zon_fojsph.webp', 'Queso curado graso', 0.05, 1.0, '0219', 166, 10, 14, 0.1, NOW(), NOW()),
('Queso de cabra', 'Grasas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/queso-cabra_10_11zon_swenod.webp', 'Lácteo de cabra suave', 0.05, 1.0, '0220', 103, 6, 9, 0.1, NOW(), NOW()),

-- VITAMINAS (20)
('Zanahoria', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189556/zanahoria_9_11zon_xrdlgz.webp', 'Rica en betacarotenos', 0.15, 0.2, '0301', 40, 1, 0.2, 9, NOW(), NOW()),
('Brócoli', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/brocoli_8_11zon_gg5eu2.webp', 'Verdura crucífera rica en C y K', 0.2, 0.4, '0302', 55, 4, 0.5, 10, NOW(), NOW()),
('Tomate', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189553/tomate_7_11zon_sm8ln9.webp', 'Fuente de licopeno y vitamina C', 0.15, 0.2, '0303', 18, 0.9, 0.2, 3.9, NOW(), NOW()),
('Espinacas', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189548/espinacas_6_11zon_czmg5j.webp', 'Ricas en hierro y vitamina K', 0.15, 0.3, '0304', 23, 2.9, 0.4, 3.6, NOW(), NOW()),
('Pimiento rojo', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189551/pimiento-rojo_5_11zon_jhf3ui.webp', 'Alto en vitamina C', 0.15, 0.3, '0305', 31, 1, 0.3, 6, NOW(), NOW()),
('Kale', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189549/kale_4_11zon_rvxzpn.webp', 'Hoja verde cargada de nutrientes', 0.15, 0.4, '0306', 49, 4.3, 0.9, 8.8, NOW(), NOW()),
('Kiwi', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/kiwi_catxzz.webp', 'Fruta rica en vitamina C', 0.1, 0.4, '0307', 61, 1.1, 0.5, 14.7, NOW(), NOW()),
('Fresas', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189562/fresas_rkihhc.webp', 'Antioxidantes y fibra', 0.15, 0.3, '0308', 49, 1, 0.5, 11.7, NOW(), NOW()),
('Arándanos', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/arandanos_3_11zon_guzjo9.webp', 'Ricos en antocianinas', 0.1, 0.4, '0309', 57, 0.7, 0.3, 14.5, NOW(), NOW()),
('Mango', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189550/mango_2_11zon_odqll8.webp', 'Fuente de vitamina A y C', 0.15, 0.3, '0310', 60, 0.8, 0.4, 15, NOW(), NOW()),
('Papaya', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189562/papaya_wukb3c.webp', 'Enzima papaina y vitamina C', 0.15, 0.3, '0311', 59, 0.6, 0.1, 15.4, NOW(), NOW()),
('Melón', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189550/melon_1_11zon_jkylms.webp', 'Hidratante y rico en vitamina A', 0.2, 0.3, '0312', 34, 0.8, 0.2, 8.2, NOW(), NOW()),
('Sandía', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189546/sandia_43_11zon_irlvuy.webp', 'Alto contenido de agua y licopeno', 0.2, 0.3, '0313', 30, 0.6, 0.2, 7.6, NOW(), NOW()),
('Coliflor', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189546/coliflor_42_11zon_tmv5yo.webp', 'Rica en vitamina C y fibra', 0.15, 0.3, '0314', 25, 2, 0.1, 5, NOW(), NOW()),
('Espárragos', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189566/esparragos_swodpe.webp', 'Fuente de vitamina K y folato', 0.15, 0.4, '0315', 20, 2.2, 0.2, 3.7, NOW(), NOW()),
('Alcachofa', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189546/alcachofa_41_11zon_eb5noo.webp', 'Fibra y antioxidantes', 0.2, 0.5, '0316', 47, 3.3, 0.2, 11.5, NOW(), NOW()),
('Coles de Bruselas', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189547/coles-bruselas_40_11zon_rdxnpa.webp', 'Ricas en C y K', 0.15, 0.3, '0317', 43, 3.4, 0.3, 8.95, NOW(), NOW()),
('Pepino', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745339491/pepino_fm5fxo.webp', 'Muy hidratante y bajo en calorías', 0.15, 0.2, '0318', 16, 0.7, 0.1, 3.6, NOW(), NOW()),
('Calabacín', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745339489/calabacin_mclpgk.webp', 'Bajo en calorías y versátil', 0.15, 0.2, '0319', 17, 1.2, 0.3, 3.1, NOW(), NOW()),
('Lechuga romana', 'Vitaminas', 'https://res.cloudinary.com/dvvoccp9x/image/upload/v1745189562/lechuga-romana_voqvd1.webp', 'Rica en folato y fibra', 0.15, 0.2, '0320', 17, 1.2, 0.3, 3.3, NOW(), NOW());
