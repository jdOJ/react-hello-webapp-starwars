const descriptionItem = {
    "Luke Skywalker": "A young Jedi Knight who becomes a key figure in the Rebel Alliance's fight against the Galactic Empire.",
    "C-3PO": "A protocol droid fluent in over six million forms of communication, serving the Rebel Alliance.",
    "R2-D2": "An astromech droid known for its resourcefulness and bravery, often accompanying key Rebel figures.",
    "Darth Vader": "Once a Jedi Knight named Anakin Skywalker, he turned to the dark side and became a Sith Lord.",
    "Leia Organa": "A leader of the Rebel Alliance, princess of Alderaan, and twin sister to Luke Skywalker.",
    "Owen Lars": "Luke Skywalker's uncle and guardian on the desert planet of Tatooine.",
    "Beru Whitesun Lars": "Luke Skywalker's aunt, who raised him on Tatooine with her husband Owen.",
    "R5-D4": "An astromech droid with a bad motivator, initially purchased by Owen Lars before being replaced by R2-D2.",
    "Biggs Darklighter": "A pilot in the Rebel Alliance and a close friend of Luke Skywalker from Tatooine.",
    "Obi-Wan Kenobi": "A wise Jedi Master who mentors both Anakin and Luke Skywalker.",
    "Sand Crawler": "A massive, slow-moving vehicle used by Jawas to transport droids and salvage across Tatooine.",
    "T-16 skyhopper": "A high-speed airspeeder used by Luke Skywalker for recreational flying and target practice.",
    "X-34 landspeeder": "A civilian landspeeder used by Luke Skywalker for transportation across the deserts of Tatooine.",
    "TIE/LN starfighter": "The standard starfighter of the Galactic Empire, known for its agility and distinctive twin ion engines.",
    "Snowspeeder": "A modified airspeeder used by the Rebel Alliance during the Battle of Hoth.",
    "TIE bomber": "A variant of the TIE starfighter designed for bombing runs and heavy ordnance delivery.",
    "AT-AT": "A large, four-legged combat walker used by the Imperial ground forces, especially on Hoth.",
    "AT-ST": "A two-legged walker used by the Imperial Army for reconnaissance and support.",
    "Storm IV Twin-Pod cloud car": "A twin-pod patrol vehicle used for security and transport in the skies of Bespin.",
    "Sail barge": "A large, sail-powered vehicle used by Jabba the Hutt for transport and entertainment on Tatooine.",
    "Tatooine": "A desert planet in the Outer Rim Territories, known for its harsh environment and twin suns.",
    "Alderaan": "A peaceful core world destroyed by the Death Star, and home planet of Leia Organa.",
    "Yavin IV": "A jungle-covered moon that houses the Rebel Alliance's base during the Battle of Yavin.",
    "Hoth": "A remote ice planet that serves as the location of a secret Rebel Alliance base.",
    "Dagobah": "A swamp-covered planet where Yoda lives in exile and trains Luke Skywalker.",
    "Bespin": "A gas giant famous for Cloud City, a floating mining colony and resort.",
    "Endor": "A forested moon inhabited by Ewoks, and the site of the second Death Star's destruction.",
    "Naboo": "A lush, green planet with a rich culture, home to Padmé Amidala and Palpatine.",
    "Coruscant": "The bustling city-covered capital planet of the galaxy, serving as the political hub.",
    "Kamino": "An oceanic planet known for its cloning facilities and production of the Republic's clone army."
};

export const getDescription = (name) => {
    if (!name) return "No description available.";
    return descriptionItem[name] || "No description available.";
};