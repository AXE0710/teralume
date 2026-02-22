import { createTranslator, providers } from '@mixxtor/translader';
import fs from 'fs';

// 1. Initialize the free translator
const translator = createTranslator({
  default: 'google-free',
  providers: {
    'google-free': providers.googleFree(),
  },
});

// Define all English text found in the project
const enData = {
  "heroTitle": "Sustainable Home Textiles with Integrity",
  "heroSubtitle": "Crafted from carefully selected natural materials, our designs embody tangible comfort, timeless elegance, and responsible quality — creating a home that radiates warmth, calm, and style.",
  "cta": "Elevate your living space with natural, lasting value.",
  "footerBrandDesc": "Premium home textiles crafted with care and sustainable practices.",
  "navTitle": "Navigation",
  "navHome": "Home",
  "navShop": "Shop",
  "navAbout": "About",
  "navCatalog": "Catalog",
  "navContact": "Contact",
  "catTitle": "Categories",
  "catCushions": "Cushions",
  "catKitchen": "Kitchen Cloths",
  "catLiving": "Living Room",
  "contactTitle": "Get in Touch",
  "emailPlaceholder": "Enter your email",
  "joinBtn": "Join Now",
  "copyright": "All rights reserved.",
  "privacy": "Privacy Policy",
  "terms": "Terms & Conditions",
  "legal": "Legal Notice",
  "buyBtn": "Buy",
  "aboutTitle": "Who We Are",
  "aboutSubtitle": "Dedicated to bringing sustainable comfort and artisanal craft into your home.",
  "aboutTerraTitle": "Terra",
  "aboutTerraDesc": "Latin for Earth → Represents naturalness, authenticity, craftsmanship, materials sourced from nature, down-to-earthness, and warmth.",
  "aboutLumeTitle": "Lume",
  "aboutLumeDesc": "Derived from Lumen (Latin: Light) → Symbolizes brightness, warmth, tranquility, elegance, atmosphere, and the feeling of being at home.",
  "aboutLivingTitle": "Living",
  "aboutLivingDesc": "Refers to living spaces, interior design, and lifestyle—focusing not just on products, but on a way of life.",
  "aboutCoreMeaningTitle": "Core Meaning",
  "aboutCoreMeaningDesc": "\"A lifestyle and way of living that connects natural earthiness with warm light, tranquility, and timeless elegance.\"",
  "aboutStoryTitle": "Our Story",
  "aboutStoryDesc": "Terralume Living began with a simple idea: that the objects we surround ourselves with should bring peace, comfort, and beauty without compromising the health of our planet. Founded by a group of designers and textile enthusiasts, we set out to curate a collection of home goods that bridge the gap between modern aesthetics and traditional craftsmanship.",
  "aboutCraftedTitle": "Crafted with Care",
  "aboutCraftedDesc1": "We value thoughtful design and responsible production. Our textiles are created using carefully selected materials and refined techniques that prioritize quality, durability, and attention to detail.",
  "aboutCraftedDesc2": "Each piece is designed to bring lasting comfort and understated elegance into your home.",
  "aboutSustainableTitle": "Sustainable by Design",
  "aboutSustainableDesc": "Sustainability isn't just a buzzword for us; it's the foundation of everything we do. From organic cottons and linens to natural dyes and plastic-free packaging, we are committed to reducing our environmental footprint while maximizing the quality of your home environment. We believe luxury and responsibility can coexist beautifully.",
  "aboutPhilosophyTitle": "Our Philosophy",
  "aboutPhilMindful": "Mindful Living",
  "aboutPhilMindfulDesc": "Creating spaces that encourage rest, reflection, and connection through thoughtful design.",
  "aboutPhilEthical": "Ethical Sourcing",
  "aboutPhilEthicalDesc": "Partnering directly with makers who are paid fair wages and work in safe, dignified conditions.",
  "aboutPhilTimeless": "Timeless Design",
  "aboutPhilTimelessDesc": "Products designed to transcend fleeting trends and remain beautiful and functional for years.",
  "aboutTrustEthical": "Ethically Manufactured",
  "aboutTrustEthicalDesc": "Fair wages and safe working conditions.",
  "aboutTrustShipping": "Free Shipping",
  "aboutTrustShippingDesc": "On all orders over $150. Easy returns.",
  "aboutTrustSecure": "Secure Payment",
  "aboutTrustSecureDesc": "100% secure encrypted checkout."
};

// Load products and add to enData
try {
    const productsRaw = fs.readFileSync('./lib/products.json', 'utf8');
    const products = JSON.parse(productsRaw);
    products.forEach(p => {
        enData[`prod_name_${p.id}`] = p.name;
        enData[`prod_desc_${p.id}`] = p.description;
        enData[`prod_long_${p.id}`] = p.longDescription;
        enData[`prod_mat_${p.id}`] = p.material;
        enData[`prod_care_${p.id}`] = p.care;
    });
    console.log(`Loaded ${products.length} products for translation.`);
} catch (e) {
    console.warn("Could not load products.json for translation:", e.message);
}

// Load kids products and add to enData
try {
    const kidsRaw = fs.readFileSync('./lib/kids.json', 'utf8');
    const kidsProducts = JSON.parse(kidsRaw);
    kidsProducts.forEach(p => {
        enData[`kid_name_${p.id}`] = p.name;
        enData[`kid_desc_${p.id}`] = p.description;
        enData[`kid_long_${p.id}`] = p.longDescription;
        enData[`kid_mat_${p.id}`] = p.material;
        enData[`kid_care_${p.id}`] = p.care;
    });
    console.log(`Loaded ${kidsProducts.length} kids products for translation.`);
} catch (e) {
    console.warn("Could not load kids.json for translation:", e.message);
}

async function translateFile() {
  try {
    // 2. Ensure messages directory and English file exist
    if (!fs.existsSync('./messages')) fs.mkdirSync('./messages');
    fs.writeFileSync('./messages/en.json', JSON.stringify(enData, null, 2));
    
    const deData = {};

    console.log("Starting English -> German translation...");

    for (const [key, value] of Object.entries(enData)) {
      // 3. Translate the text
      const result = await translator.translateText(value, 'en', 'de');
      deData[key] = result.translation;
      
      console.log(`✅ Translated: ${key}`);
      
      // 4. Add a tiny delay to avoid being blocked by Google (important for large text)
      await new Promise(res => setTimeout(res, 500));
    }

    // 5. Save the result
    fs.writeFileSync('./messages/de.json', JSON.stringify(deData, null, 2));
    console.log("\nSuccess! German file 'de.json' created in /messages.");
    
  } catch (error) {
    console.error("Translation failed:", error);
  }
}

translateFile();