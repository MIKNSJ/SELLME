const categories = [
    "Clothing",
    "Electronics",
    "Furniture",
    "Books",
    "Handmade crafts",
    "Jewelry",
    "Beauty products",
    "Kitchen appliances",
    "Sports equipment",
    "Toys and games",
    "Home décor",
    "Musical instruments",
    "Art prints",
    "Gardening supplies",
    "Pet supplies",
    "Vintage collectibles",
    "Fitness gear",
    "Office supplies",
    "Automotive parts",
    "Health supplements",
];

const titles = [
    "Black/White Tracksuit",
    "Apple iPhone 16",
    "Leather Sofa",
    "Harry Potter",
    "Handmade Leather Wallet",
    "Silver Nacklace",
    "Lipstick",
    "Samsung Refrigerator",
    "UFC Boxing Gloves",
    "GTAVI and PS5 Package",
    "Tablecloth",
    "Piano",
    "Mona Lisa",
    "Lawnmotor",
    "Dog food",
    "Samurai Sword",
    "Barbell",
    "Herman Miller Chair",
    "Car Battery",
    "Whey Protein"
];

const conditions = [
    "new",
    "like-new",
    "refurbished",
    "used-very good",
    "used-good",
    "used-acceptable",
    "for parts",
    "other"
];

const descriptions = [
    "I'm selling this item, and it's in excellent condition, ready for a new owner!",
    "This item has been well cared for and is looking for someone who will appreciate it.",
    "I'm letting go of this item, perfect for anyone looking to add something special to their collection.",
    "For sale: a quality piece that brings great value and functionality!",
    "This item is up for grabs, and I'm sure it will serve you well!",
    "I'm parting with this item, and it has plenty of life left in it for its next owner.",
    "Selling this unique piece that adds charm and character to any setting.",
    "I'm offering this item at a great price, making it an excellent opportunity!",
    "This item has been gently used and is ready for its next adventure.",
    "I'm selling this item, and it comes with some fantastic features you’ll love!",
    "This item has been a reliable companion and is looking for a new home.",
    "For sale: a wonderful piece that will enhance your space or experience!",
    "I'm letting go of this item, and it has many great memories attached to it!",
    "This item is available, and I'm sure you'll find it to be a fantastic addition!",
    "I'm parting with this item, which is both practical and stylish!",
    "For sale: a versatile piece that fits perfectly in various settings.",
    "This item is up for sale, and it has been a joy to own!",
    "I'm selling this item, and I know it will bring happiness to its new owner.",
    "This item has plenty of potential, and I'm excited to pass it on!",
    "I'm offering this item at a reasonable price, making it a smart buy!"
];

const locations = [
    "Austin, Texas",
    "Denver, Colorado",
    "Seattle, Washington",
    "Miami, Florida",
    "Portland, Oregon",
    "Nashville, Tennessee",
    "Chicago, Illinois",
    "San Francisco, California",
    "Boston, Massachusetts",
    "Phoenix, Arizona",
    "New Orleans, Louisiana",
    "Minneapolis, Minnesota",
    "Atlanta, Georgia",
    "Salt Lake City, Utah",
    "Dallas, Texas",
    "Richmond, Virginia",
    "Orlando, Florida",
    "Charleston, South Carolina",
    "Raleigh, North Carolina",
    "Sacramento, California",
];

const names = [
    "StarGazer88",
    "TechWhiz321",
    "DreamCatcher42",
    "MidnightRider7",
    "OceanExplorer5",
    "QuantumLeap99",
    "UrbanNomad13",
    "PixelPioneer22",
    "MysticWanderer4",
    "CosmicVoyager11",
    "SolarFlare66",
    "VintageVibes77",
    "ElectricEcho19",
    "HiddenGem33",
    "RebelHeart88",
    "ForestSpirit8",
    "LuminousSoul5",
    "DigitalDruid12",
    "ZenMaster24",
    "WhimsicalWriter3",
];

const emails = [
    "user12345@example.com",
    "random.email@mail.com",
    "info@domain.net",
    "contact@webservice.org",
    "support@randommail.co",
    "admin@xyz.com",
    "inquiries@uniqueaddress.info",
    "feedback@sampledomain.biz",
    "hello@serviceprovider.us",
    "welcome@coolmail.net",
    "questions@myemail.xyz",
    "news@internetmail.com",
    "updates@domainworld.org",
    "alerts@mywebsite.info",
    "sales@randomdomain.co",
    "connect@mailbox.us",
    "notifications@fakemail.com",
    "help@webmail.io",
    "team@addressbook.net",
    "info@domaindifferent.com",
];

const numbers = [
    "(558) 944-8657", "(637) 189-9500", "(888) 847-9809",
    "(615) 789-8260", "(651) 402-6493", "(898) 689-8458",
    "(728) 227-3644", "(618) 181-4105", "(567) 598-9181",
    "(784) 852-4465", "(301) 518-2524", "(532) 678-4871",
    "(860) 392-8691", "(825) 101-7863", "(630) 748-2163",
    "(744) 272-2543", "(752) 890-7687", "(792) 624-3022",
    "(434) 785-8786", "(787) 775-7927"
];

const mongoose = require("mongoose");
const Item = require("../models/item");

mongoose.connect("mongodb://localhost:27017/sellme");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("The database has been connected.");
});

async function loadSampleData() {
    await Item.deleteMany({});
    for (let i = 0; i < 10; i++) {
        let rand20 = Math.floor(Math.random() * 10);
        let rand8 = Math.floor(Math.random() * 8);
        let rand100 = Math.floor(Math.random() * 100);

        let item = new Item(
            {
                category: categories[rand20],
                title: titles[rand20],
                condition: conditions[rand8],
                price: rand100,
                description: descriptions[rand20],
                location: locations[rand20],
                name: names[rand20],
                email: emails[rand20],
                phone: numbers[rand20],
            }
        );

        await item.save();
    }
}

loadSampleData();