
// تحويل HEX إلى HSL
function hexToHsl(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    const rNormalized = r / 255;
    const gNormalized = g / 255;
    const bNormalized = b / 255;

    const max = Math.max(rNormalized, gNormalized, bNormalized);
    const min = Math.min(rNormalized, gNormalized, bNormalized);
    const delta = max - min;

    let h = 0;
    let s = 0;
    let l = (max + min) / 2;

    if (delta !== 0) {
        s = delta / (1 - Math.abs(2 * l - 1));
        switch (max) {
            case rNormalized:
                h = ((gNormalized - bNormalized) / delta) % 6;
                break;
            case gNormalized:
                h = (bNormalized - rNormalized) / delta + 2;
                break;
            case bNormalized:
                h = (rNormalized - gNormalized) / delta + 4;
                break;
        }
    }

    h = Math.round(h * 60);
    if (h < 0) h += 360;
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return { h, s, l };
}

// توليد التدرجات
// توليد التدرجات بشكل دقيق
function generateShades(baseColor) {
    const { h, s, l } = hexToHsl(baseColor);
    const shades = {};

    // استخدام قيم الإضاءة الدقيقة التي تطابق التدرجات المطلوبة
    shades[50] = `hsl(${h}, ${s}%, 97%)`;
    shades[100] = `hsl(${h}, ${s}%, 92%)`;
    shades[200] = `hsl(${h}, ${s}%, 85%)`;
    shades[300] = `hsl(${h}, ${s}%, 75%)`;
    shades[400] = `hsl(${h}, ${s}%, 63%)`;
    shades[500] = `hsl(${h}, ${s}%, 55%)`;
    shades[600] = `hsl(${h}, ${s}%, 50%)`;
    shades[700] = `hsl(${h}, ${s}%, 40%)`;
    shades[800] = `hsl(${h}, ${s}%, 36%)`;
    shades[900] = `hsl(${h}, ${s}%, 29%)`;
    shades[950] = `hsl(${h}, ${s}%, 15%)`;

    return shades;
}

function Palate(color) {
    // التحقق من اللون
        const root = document.documentElement;
        const shades = generateShades( color);
    
        // إضافة التدرجات كمتغيرات CSS بالاسماء المناسبة
        Object.entries(shades).forEach(([key, value]) => {
            root.style.setProperty(`--clr-${key}`, value);
        });
    
        // إضافة التدرجات الشفافة
        root.style.setProperty(`--clr-900-25`, `${shades[900].replace("hsl", "hsla").replace(")", ", 0.25)")}`);
        root.style.setProperty(`--clr-950-25`, `${shades[950].replace("hsl", "hsla").replace(")", ", 0.25)")}`);
        root.style.setProperty(`--clr-950-50`, `${shades[950].replace("hsl", "hsla").replace(")", ", 0.5)")}`);
        root.style.setProperty(`--clr-950-75`, `${shades[950].replace("hsl", "hsla").replace(")", ", 0.75)")}`);
        // new colors to lib

        root.style.setProperty(`--clr-400-25`, `${shades[400].replace("hsl", "hsla").replace(")", ", 0.25)")}`);
        root.style.setProperty(`--clr-400-50`, `${shades[400].replace("hsl", "hsla").replace(")", ", 0.5)")}`);
        root.style.setProperty(`--clr-400-75`, `${shades[400].replace("hsl", "hsla").replace(")", ", 0.75)")}`);


        root.style.setProperty(`--clr-200-25`, `${shades[200].replace("hsl", "hsla").replace(")", ", 0.25)")}`);
        root.style.setProperty(`--clr-200-50`, `${shades[200].replace("hsl", "hsla").replace(")", ", 0.5)")}`);
        root.style.setProperty(`--clr-200-75`, `${shades[200].replace("hsl", "hsla").replace(")", ", 0.75)")}`);

        root.style.setProperty(`--clr-100-25`, `${shades[100].replace("hsl", "hsla").replace(")", ", 0.25)")}`);
        root.style.setProperty(`--clr-100-50`, `${shades[100].replace("hsl", "hsla").replace(")", ", 0.5)")}`);
        root.style.setProperty(`--clr-100-75`, `${shades[100].replace("hsl", "hsla").replace(")", ", 0.75)")}`);
}    

// الحصول على اللون من URL
const urlParams = new URLSearchParams(window.location.search);
let colorCode = urlParams.get("color"); 
colorCode = '#' + colorCode
// this line for devolepment
// colorCode = '#2ff4a3';
Palate(colorCode)


