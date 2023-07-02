// WOMEN CATEGORY
// WESTERN CATEGORY


export const womensObject = { 
    "WOMENS WEAR":{
    "Western Wear":{
    "Tops, Tshirts & Shirts":{
    "Shirts":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "White", "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue",
        "Black and White", "Blue", "Brown", "Coral", "Cream", "Dark Multicolor",
        "Gold", "Green", "Grey", "Grey Melange", "Khaki", "Lavender",
        "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic", "Mint Green",
        "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", 
        "Cotton", "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", 
        "Crepe", "Denim", "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", 
        "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen", 
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", 
        "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette", "Poly silk", 
        "PolyCotton", "Polyster", "Rayon", "Rayon Slub", "Satin", "Scuba", 
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", 
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", 
        "Viscose Rayon", "Voile", "Wool"
    ]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
        "Comoros", "Congo", "Democratic Republic of the Congo", "Republic of the Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]
    
    },
    {
    name:"Manufacturer",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Fit/Shape",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["A-Line","Asymmetric","Bardot","Blouson","Boxy","Bralette","Cape","CinchedWaist","Compression","Empire","Fitted","High-Low","Kaftan","Loose","Maxi","Peplum","Racerback","Regular","Shirt Styles","Slim","Styled Back","Tank","Tiered","Tube","Tunic","Wrap"]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["crop","Long","Regular"]
    },
    {
    name:"Ocassion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Casual","Formal","Party","Semi-Formal","sporty"]
    },
    {
    name:"Neck/Collar",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Boat Neck", "Built-up Collar", "Button-Down", "Choker", "Cowl Neck", "Halter Neck", 
        "Henly", "High", "Hood", "Keyhole Neck", "Mandarin Collar", "Notch", "Off-Shoulder", 
        "One Shoulder", "Peter Pan Collar", "Polo Neck", "Round Neck", "Scoop Neck", 
        "Shawl Collar", "Shirt Collar", "Shoulder Straps", "Slim Collar", "Spread Collar", 
        "Square Neck", "Strapless", "Stylised", "Surplice", "Sweetheart Neck", "Tie-up Neck", 
        "Turtle Neck", "V-Neck"]
    },
    {
    name:"Print or Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Abstract", "Animal", "Aztec", "Bohemian", "Botanical", "Camouflage", "Checked", 
        "Chevron", "Colorblocked", "Conversational", "Embellished", "Ethnic Motif", 
        "Floral", "Geometric", "Graphic", "Horizontal Stripes", "houndstooth", "Melange", 
        "Micro Print", "Ombre", "Placement Print", "Polka Dots", "Quirky", "Solid", "Striped", 
        "Tie and Dye", "Tribal", "Tropical", "Typography", "Vertical Stripes"]
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Sleeve Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Batwing Sleeves", "Bell Sleeves", "Cap Sleeves", "Cape", "Cold Shoulder", 
        "Cuffed Sleeves", "Extended Sleeves", "Flared Sleeves", "Flutter Sleeves", 
        "Kimono Sleeves", "Off-Shoulder", "One Side Sleeve", "Puff Sleeves", "Raglan Sleeves", 
        "Regular Sleeves", "Roll-up Sleeves", "Shoulder Straps", "Sleeveless", "Slit Sleeves", 
        "Thumbhole", "Tulip Sleeves"]
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Applique", "Bow", "Cut Work", "Cut Out", "Embellished", "Fringed", "Lace inserts", 
        "Layered", "Pintucks", "Pleated or Rathered", "Pom-Poms", "Ruffles", "Sequinned", 
        "Sheen", "Smocking or Shirred", "Studded", "Tassels", "Tie-Ups", "Waist Tie-Ups"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    "Tshirts":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "White", "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", 
        "Blue", "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", 
        "Grey Melange", "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", 
        "Metallic", "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", 
        "Orange", "Peach", "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:true,
    options: [
        "Abstract", "Animal", "Aztec", "Bohemian", "Botanical", "Camouflage", "Checked", 
        "Chevron", "Colorblocked", "Conversational", "Embellished", "Ethnic Motif", 
        "Floral", "Geometric", "Graphic", "Horizontal Stripes", "houndstooth", "Melange", 
        "Micro Print", "Ombre", "Placement Print", "Polka Dots", "Quirky", "Solid", "Striped", 
        "Tie and Dye", "Tribal", "Tropical", "Typography", "Vertical Stripes"
    ]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", 
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", 
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", 
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net", "Nylon", 
        "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette", 
        "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub", "Satin", "Scuba", 
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", "Tissue", 
        "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]
    },
    {
    name:"Manufacturer",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Levi's", "SuperDry", "Celio", "Zara", "H&M", "Pantaloons", "Amigo", "Amido", "ArmaniExchange", 
        "FameForever", "Lifestyle"
    ]
    },
    {
    name:"Fit/Shape",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "A-Line", "Asymmetric", "Bardot", "Blouson", "Boxy", "Bralette", "Cape", "Cinched Waist", 
        "Compression", "Empire", "Fitted", "High-Low", "Kaftan", "Loose", "Maxi", "Peplum", 
        "Racerback", "Regular", "Shirt Styles", "Slim", "Styled Back", "Tank", "Tiered", "Tube", 
        "Tunic", "Wrap"
    ]
    
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["crop","Long","Regular"]
    },
    {
    name:"Character",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Angry Birds", "Anime", "Avengers", "BTS", "Barbie", "Disney Princess", "Donald Duck", 
        "Kung Fu Panda", "Mickey Mouse", "Minnie Mouse", "Powerpuff Girls", "Tom & Jerry", 
        "Tweety", "Wonder Woman"
    ]
    },
    {
    name:"Neck/Collar",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Boat Neck", "Built-up Collar", "Button-Down", "Choker", "Cowl Neck", "Halter Neck", 
        "Henley", "High", "Hood", "Keyhole Neck", "Mandarin Collar", "Notch", "Off-Shoulder", 
        "One Shoulder", "Peter Pan Collar", "Polo Neck", "Round Neck", "Scoop Neck", "Shawl Collar", 
        "Shirt Collar", "Shoulder Straps", "Slim Collar", "Spread Collar", "Square Neck", 
        "Strapless", "Stylised", "Surplice", "Sweetheart Neck", "Tie-up Neck", "Turtle Neck", "V-Neck"
    ]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Applique", "Checked", "Colorblocked", "Dyed/Washed", "Embellished", "Embroidered", 
        "Lace", "Printed", "Self-Design", "Solid", "Striped", "Woven Design", "Zari Woven"
    ]
    
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Sleeve Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Batwing Sleeves", "Bell Sleeves", "Cap Sleeves", "Cape", "Cold Shoulder", "Cuffed Sleeves", 
        "Extended Sleeves", "Flared Sleeves", "Flutter Sleeves", "Kimono Sleeves", "Off-Shoulder", 
        "One Side Sleeve", "Puff Sleeves", "Raglan Sleeves", "Regular Sleeves", "Roll-up Sleeves", 
        "Shoulder Straps", "Sleeveless", "Slit Sleeves", "Thumbhole", "Tulip Sleeves"
    ]
    
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Batwing Sleeves", "Bell Sleeves", "Cap Sleeves", "Cape", "Cold Shoulder", "Cuffed Sleeves", 
        "Extended Sleeves", "Flared Sleeves", "Flutter Sleeves", "Kimono Sleeves", "Off-Shoulder", 
        "One Side Sleeve", "Puff Sleeves", "Raglan Sleeves", "Regular Sleeves", "Roll-up Sleeves", 
        "Shoulder Straps", "Sleeveless", "Slit Sleeves", "Thumbhole", "Tulip Sleeves"
    ]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    "Top & Bottom Wear":{
    allOptions:[
    {
    name:"Bottom Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue", "Brown", 
        "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange", "Khaki", "Lavender", 
        "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic", "Mint Green", "Mustard", "Navy Blue", 
        "Neo Green", "Nude", "Olive", "Orange", "Peach", "Pink", "Purple", "Red", "Rust", "Silver", "Teal", 
        "White", "Yellow"
    ]
    },
    {
    name:"Bottom Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette", 
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyster", "Rayon", "Rayon Slub", "Satin",
        "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", "Tissue",
        "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Top Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue", "Brown",
        "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange", "Khaki", "Lavendar",
        "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic", "Mint Green", "Mustard", "Navy Blue",
        "Neo Green", "Nude", "Olive", "Orange", "Peach", "Pink", "Purple", "Red", "Rust", "Silver",
        "Teal", "White", "Yellow"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Top Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Add On",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Jacket","Scarf","Shrug"]
    },
    {
    name:"Bottom Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Applique", "Checked", "Colorblocked", "Dyed/Washed", "Embellished", "Embroidered",
        "Lace", "Printed", "Self-Design", "Solid", "Striped"
    ]
    
    },
    {
    name:"Bottom Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Capri", "Dress", "Dungarees", "Ethnic Bottom", "Jeans", "Leggings/Tights",
        "Palazzos", "Shorts", "Skirt", "Track Pants", "Trousers"
    ]
    
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Neck",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["High Neck","Hood","Lapel Collar","Mandarin Collar","Off-Shoulder","Peter PanCollar","Round Neck","Shirt Collar","Shoulder Straps","Square Neck","Stylished","V Neck"]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Casual","Formal","Party","Semi-Formal","sporty"]
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Top Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Applique","Checked","Colorblocked","Dyed/Washed","Embellished","Embroidered","Lace","Printted","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Top Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Crop Top","Jacket","Regular Top","Shirt","sweatshirts","T-Shirt","Tunic"]
    },
    {
    name:"Description",
    type:"Text",
    required:false,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false,
    options:[]
    },
    ]
    },
    
    "Tops & Tunics":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow" ]
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:true,
    options: [
        "Abstract", "Animal", "Aztec", "Bohemian", "Botanical", "Camouflage", "Checked", "Chevron",
        "Colorblocked", "Conversational", "Embellished", "Ethnic Motif", "Floral", "Geometric",
        "Graphic", "Horizontal Stripes", "Houndstooth", "Melange", "Micro Print", "Ombre",
        "Placement Print", "Polka Dots", "Quirky", "Solid", "Striped", "Tie and Dye", "Tribal",
        "Tropical", "Typography", "Vertical Stripes"
    ]
    
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Fit/Shape",
    type:"Dropdown",
    required:true,
    options: [
        "A-Line", "Asymmetric", "Backless", "Bardot", "Blouson", "Boxy", "Bralette", "Cami", "Cape",
        "Cinched Waist", "Compression", "Empire", "Fish Cut", "Flared", "High-Slit", "High-Low", "Kaftan",
        "Loose", "Maxi", "Oversized", "Peplum", "Racerback", "Regular", "Shirt Styles", "Slim",
        "Spaghetti", "Styled Back", "Tank", "Tube", "Tunic", "Wrap"
    ]
    
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Character",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Angry Birds","Anime","Avengers","BTS","Barbie","Disney Princess","Donald Duck","Kung Fu Panda","Mickey Mouse","Minnie Mouse","Powerpuff Girls","Tom & Jerry","Tweety","Wondar Woman"]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Crop","Long","Midi","Regular"]
    },
    {
    name:"Neck/Collar",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Boat Neck", "Built-up Collar", "Button-Down", "Choker", "Cowl Neck", "Halter Neck", "Henley",
        "High Neck", "Hood", "Keyhole Neck", "Mandarin Collar", "Notch", "Off-Shoulder", "One Shoulder",
        "Peter Pan Collar", "Polo Neck", "Round Neck", "Scoop Neck", "Shawl Collar", "Shirt Collar",
        "Shoulder Straps", "Slim Collar", "Spread Collar", "Square Neck", "Strapless", "Stylized",
        "Surplice", "Sweetheart Neck", "Tie-up Neck", "Turtle Neck", "V-Neck"
    ]
    
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Casual","Formal","Party","Semi-Formal","sporty"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Sleeve Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Batwing Sleeves","Bell Sleeves","Cap Sleeves","Cape","Cold Shoulder","CuffesSleeves","Extended Sleeves","Flared Sleeves","Flutter Sleeves","KimonoSleeves","Off-Sholder","One Side Sleeve","Puff Sleeves","Raglan Sleeves","RegularSleeves","roll-up Sleeves","Shoulder Straps","Sleeveless","Slit Sleeves","Thumbhole","Tulip Sleeves"]
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Applique","Bow","Cut Work","Cut Out","Embellished","Fringed","Lace inserts","Layered","Pintucks","Pleated orRathered","Pom-Poms","Ruffles","Sequinned","Sheen","Smocking or Shirred","Studded","Tassels","Tie-Ups","Waist Tie-ups"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    "Women Formal Shirt & Bottom Fabric":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow" ]
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:true,
    options:[ "Formal suit Fabric.","Trouser & Shirt Fabric,Skirt & Shirt Fabric."]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    "Dresses, Gowns & Jumpsuits":{
    "Dresses":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:["Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow"]
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:[ "1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Length",
    type:"Dropdown",
    required:true,
    options:["Above Knee","Calf-Length","Knee Length","Maxi","Midi","Mini"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Add On",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Belt","Jaket","Scarf","Shrug"]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Character",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Angry Birds","Anime","Avengers","BTS","Barbie","Disney Princess","Donald Duck","Kung Fu Panda","Mickey Mouse","Minnie Mouse","Powerpuff Girls","Tom & Jerry","Tweety","Wondar Woman"]
    },
    {
    name:"Neck",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Boat Neck", "Built-up Collar", "Button-Down", "Choker", "Cowl Neck", "Halter Neck", "Henley",
        "High Neck", "Hood", "Keyhole Neck", "Mandarin Collar", "Notch", "Off-Shoulder", "One Shoulder",
        "Peter Pan Collar", "Polo Neck", "Round Neck", "Scoop Neck", "Shawl Collar", "Shirt Collar",
        "Shoulder Straps", "Slim Collar", "Spread Collar", "Square Neck", "Strapless", "Stylized",
        "Surplice", "Sweetheart Neck", "Tie-up Neck", "Turtle Neck", "V-Neck"
    ]
    
    },
    {
    name:"Ocassion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Casual","Formal","Party","Semi-Formal","sporty"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Sleeve Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Batwing Sleeves","Bell Sleeves","Cap Sleeves","Cape","Cold Shoulder","Cuffes Sleeves","Extended Sleeves","Flared Sleeves","Flutter Sleeves","KimonoSleeves","Off-Sholder","One Side Sleeve","Puff Sleeves","Raglan Sleeves","Regular Sleeves","roll-up Sleeves","Shoulder Straps","Sleeveless","Slit Sleeves","Thumbhole","Tulip Sleeves"
    ]
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Appplique","Bow","Cut Out"]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Applique","Bow","Cut Out","Cutwork","Embellished","Fringed","Laceinserts","Layered","Leather or Faux Leather Trim","Pleated or Gathered","Ruched","Ruffles","Sequinned","Sheen","Smocking or Shirred","Studded","Tasselsor Pom-Poms","Tie-Ups","unicorn","Waist Tie-ups"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    "Gowns":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:["Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink",
    "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow" ]
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Fit/Shape",
    type:"Dropdown",
    required:true,
    options:[
    "A-Line","Asymmetric","Backless","Bardot","Blouson","Boxy","Bralette","Cami","Cape","Cinched Waist","Compression","Empire","Fish Cut","Flared","HighSlit","High-Low","Kaftan","Loose","Maxi","Oversized","Peplum","Racerback","Regular","Shirt Styles","slim","Spaghetti","Styled Back","Tank","Tube","Tunic","Wrap"]
    },
    {
    name:"Occassion",
    type:"Dropdown",
    required:true,
    options:["Casual","Formal","Party","Semi-Formal","sporty"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:true,
    options:["Abstract","Animal","Applique","Azetc","Bandhani","Batik","Block","Bohemian","Botanical","Checked","Chevron","Colorblocked","Embellished","Ethnic Motif","Floral","Foil","Geometric","Graphic","Herringbone","Houndstooth","Ikat","kalamkari","Leheriya","Madhubani","Micro","Paisley","Pattu","Polka Dot","Quirky","Ribbon","Scenic","Shibori","Solid","Stripe","Tie and Dye","Tribal","Warli","Woven Design","Zari butta"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Bottom Color",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolor", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    },
    {
    name:"Bottom Fabric",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Dupatta Color",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    
    },
    {
    name:"Dupatta Fabric",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Inner Fabric",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Above Knee","Knee Length","Maxi","Midi","Mini"]
    },
    {
    name:"Neck",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Boat Neck", "Built-up Collar", "Button-Down", "Choker", "Cowl Neck", "Halter Neck", "Henley",
        "High Neck", "Hood", "Keyhole Neck", "Mandarin Collar", "Notch", "Off-Shoulder", "One Shoulder",
        "Peter Pan Collar", "Polo Neck", "Round Neck", "Scoop Neck", "Shawl Collar", "Shirt Collar",
        "Shoulder Straps", "Slim Collar", "Spread Collar", "Square Neck", "Strapless", "Stylized",
        "Surplice", "Sweetheart Neck", "Tie-up Neck", "Turtle Neck", "V-Neck"
    ]
    
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Checked", "Chikankari", "Colorblocked", "Criss Cross", "Crochet", "Dyed/Washed",
        "Embellished", "Embroidered", "Hanbok", "Lace", "Printed", "Ribbed", "Self-Design",
        "Solid", "Striped", "Woven Design", "Zari Woven"
    ]
    
    
    },
    {
    name:"Set Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Single Piece","With Bottom","With Dupataa","With Dupataa and bottom"]
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Sleeve Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Batwing Sleeves", "Bell Sleeves", "Cap Sleeves", "Cape", "Cold Shoulder", "Cuffed Sleeves",
        "Extended Sleeves", "Flared Sleeves", "Flutter Sleeves", "Kimono Sleeves", "Off-Shoulder",
        "One Side Sleeve", "Puff Sleeves", "Raglan Sleeves", "Regular Sleeves", "Roll-up Sleeves",
        "Shoulder Straps", "Sleeveless", "Slit Sleeves", "Thumbhole", "Tulip Sleeves"
    ]
    
    },
    {
    name:"Stitch Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Semi-Slitched","Slitched","Unstiched"]
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Aari Work","Applique","Beads & Stones","Bow","Brocade","Brooch","Butterfly Inserts","Cut out","Cutwork","Embroidered","Frills","Fringed","Gota Work","Jacquard","Lace Border","Lace Inserts","Layered","Leather or Faux Leather Trim","Mirrior Work","Mukaish","patchwork","Pintucks","Pleated or Gathered","Pom-Pom","Ruffles","Sequinned","Sheen","Show Button","Smocking or Shirred","Studded","Tassels or Pom-Poms","Tie-Ups","Waist Tie-ups","Zardozi"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Jumpsuits":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink",
    "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow" ]
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:[ "1","2","3","4","5"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Bottom Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Jeans","Skirts"]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Fit/Shape",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["A-Line","Asymmetric","Bardot","Blouson","Boxy","Bralette","Cape","Cinched Waist","Compression","Empire","Fitted","High-Low","Kaftan","Loose","Maxi","Peplum","Racerback","Regular","Shirt Styles","Slim","Styled Back","Tank","Tiered","Tube","Tunic","Wrap"]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Above Knee","Knee length","Maxi","Midi","Mini"]
    },
    {
    name:"Neck",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Boat Neck", "Built-up Collar", "Button-Down", "Choker", "Cowl Neck", "Halter Neck", "Henley",
        "High Neck", "Hood", "Keyhole Neck", "Mandarin Collar", "Notch", "Off-Shoulder", "One Shoulder",
        "Peter Pan Collar", "Polo Neck", "Round Neck", "Scoop Neck", "Shawl Collar", "Shirt Collar",
        "Shoulder Straps", "Slim Collar", "Spread Collar", "Square Neck", "Strapless", "Stylized",
        "Surplice", "Sweetheart Neck", "Tie-up Neck", "Turtle Neck", "V-Neck"
    ]
    
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[ "Casual","Formal","Party","Semi-Formal","sporty"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Abstract","Animal","Applique","Azetc","Bandhani","Batik","Block","Bohemian","Botanical","Checked","Chevron","Colorblocked","Embellished","EthnicMotif","Floral","Foil","Geometric","Graphic","Herringbone","Houndstooth","Ikat","kalamkari","Leheriya","Madhubani","Micro","Paisley","Pattu","Polka Dot","Quirky","Ribbon","Scenic","Shibori","Solid","Stripe","Tie and Dye","Tribal","Warli","Woven Design","Zari butta"]
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Sleeve Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Batwing Sleeves", "Bell Sleeves", "Cap Sleeves", "Cape", "Cold Shoulder", "Cuffed Sleeves",
        "Extended Sleeves", "Flared Sleeves", "Flutter Sleeves", "Kimono Sleeves", "Off-Shoulder",
        "One Side Sleeve", "Puff Sleeves", "Raglan Sleeves", "Regular Sleeves", "Roll-up Sleeves",
        "Shoulder Straps", "Sleeveless", "Slit Sleeves", "Thumbhole", "Tulip Sleeves"
    ]
    
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Aari Work","Applique","Beads & Stones","Bow","Brocade","Brooch","Butterfly Inserts","Cut out","Cutwork","Embroidered","Frills","Fringed","Gota Work","Jacquard","Lace Border","Lace Inserts","Layered","Leather or Faux Leather Trim","Mirrior Work","Mukaish","patchwork","Pintucks","Pleated or Gathered","Pom-Pom","Ruffles","Sequinned","Sheen","Show Button","Smocking or Shirred","Studded","Tassels or Pom-Poms","Tie-Ups","Waist Tie-ups","Zardozi"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    "Jeans & Jeggings":{
    "Jeans":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options:["Acrylic","Art Silk","Bamboo","Chambray","Chanderi Silk", "Chiffon","Cotton", "Cotton Blend","Cotton Cambric","Cotton Lenin","Cotton Silk","Crepe","Denim","Dupion Silk","Georgette","Jacquard","Jute Cotton","Jute Silk","Khadi Cotton","Kora Muslin","Lace","Leather","Linen","Lyocell","Modal","Mulmul","Net","Nylon","Organza","Paper Silk","Pashmina","Poly Chiffon","Poly Crepe","Poly Georgette","Poly silk","PolyCotton","Polyster","Rayon","Rayon Slub","Satin","Scuba","Shantoon","Silk","Silk Blend","Soft Silk","Super Net","Taffeta Silk","Tissue","Tussar Silk","Velvet","Vichitra Silk","Viscose","Viscose Rayon"]
    },
    {
    name:"Fit/Shape",
    type:"Dropdown",
    required:true,
    options:["Bell Bottom","Fitted,Flared","Jogger","Loose","Regular","Skinny","Slim","Straight","Tapered"]
    },
    {
    name:"Stretch",
    type:"Dropdown",
    required:true,
    options:["Non-Strechable","Strechable"]
    },
    {
    name:"Waist Rise",
    type:"Dropdown",
    required:true,
    options:["High rise","Low Rise","Mid Rise"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Distress",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["CleanLook","Highly Distressed","low Distressed","Slash knee"]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Cropped","Regular"]
    },
    {
    name:"Shade",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Coloured","Dark","Light","Medium"]
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Applique","Bow","Cut Work","Cut Out","Embellished","Fringed","Lace inserts","Layered","Pintucks","Pleated or Rathered","Pom-Poms","Ruffles","Sequinned","Sheen","Smocking or Shirred","Studded","Tassels","Tie-Ups","Waist Tie-ups"]
    },
    {
    name:"Wash",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Heavy Wash","Light Wash","No Wash"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    "Jeggings":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Waist Rise",
    type:"Dropdown",
    required:true,
    options:["High Raise","Low Raise","Medium Raise"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Distress",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Clean Look","Highly Distressed","Low Distress","Slash Knee"]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Cropped","Regular"]
    },
    {
    name:"Closure",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Button","Drawstring","slip-on","Zip"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Abstract","Animal","Applique","Azetc","Bandhani","Batik","Block","Bohemian","Botanical","Checked","Chevron","Colorblocked","Embellished","Ethnic Motif","Floral","Foil","Geometric","Graphic","Herringbone","Houndstooth","Ikat","kalamkari","Leheriya","Madhubani","Micro","Paisley","Pattu","Polka Dot","Quirky","Ribbon","Scenic","Shibori","Solid","Stripe","Tie and Dye","Tribal","Warli","Woven Design","Zari butta"]
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Applique","Bow","Cut Work","Cut Out","Embellished","Fringed","Lace inserts","Layered","Pintucks","Pleated or Rathered","Pom-Poms","Ruffles","Sequinned","Sheen","Smocking or Shirred","Studded","Tassels","Tie-Ups","Waist Tie-ups"]
    },
    {
    name:"Wash",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Heavy Wash","Light Wash","No Wash"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    "Capes, Shrugs & Ponchos":{
    "Capes, Shrugs & Ponchos":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Fit/Shape",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "A-Line", "Asymmetric", "Backless", "Bardot", "Blouson", "Boxy", "Bralette", "Cami", "Cape",
        "Cinched Waist", "Compression", "Empire", "Fish Cut", "Flared", "High-Slit", "High-Low", "Kaftan",
        "Loose", "Maxi", "Oversized", "Peplum", "Racerback", "Regular", "Shirt Styles", "Slim",
        "Spaghetti", "Styled Back", "Tank", "Tube", "Tunic", "Wrap"
    ]
    
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Neck/Collar",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Boat Neck", "Built-up Collar", "Button-Down", "Choker", "Cowl Neck", "Halter Neck", "Henley",
        "High Neck", "Hood", "Keyhole Neck", "Mandarin Collar", "Notch", "Off-Shoulder", "One Shoulder",
        "Peter Pan Collar", "Polo Neck", "Round Neck", "Scoop Neck", "Shawl Collar", "Shirt Collar",
        "Shoulder Straps", "Slim Collar", "Spread Collar", "Square Neck", "Strapless", "Stylized",
        "Surplice", "Sweetheart Neck", "Tie-up Neck", "Turtle Neck", "V-Neck"
    ]
    
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Print or Pattern type",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Abstract", "Animal", "Aztec", "Bohemian", "Botanical", "Camouflage", "Checked", "Chevron",
        "Colorblocked", "Conversational", "Embellished", "Ethnic Motif", "Floral", "Geometric",
        "Graphic", "Horizontal Stripes", "Houndstooth", "Melange", "Micro Print", "Ombre",
        "Placement Print", "Polka Dots", "Quirky", "Solid", "Striped", "Tie and Dye", "Tribal",
        "Tropical", "Typography", "Vertical Stripes"
    ]
    
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Sleeve Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Batwing Sleeves", "Bell Sleeves", "Cap Sleeves", "Cape", "Cold Shoulder", "Cuffed Sleeves",
        "Extended Sleeves", "Flared Sleeves", "Flutter Sleeves", "Kimono Sleeves", "Off-Shoulder",
        "One Side Sleeve", "Puff Sleeves", "Raglan Sleeves", "Regular Sleeves", "Roll-up Sleeves",
        "Shoulder Straps", "Sleeveless", "Slit Sleeves", "Thumbhole", "Tulip Sleeves"
    ]
    
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Applique", "Bow", "Cut Work", "Cut Out", "Embellished", "Fringed", "Lace inserts", 
        "Layered", "Pintucks", "Pleated or Ruffled", "Pom-Poms", "Ruffles", "Sequinned", "Sheen", 
        "Smocking or Shirred", "Studded", "Tassels", "Tie-Ups", "Waist Tie-ups"
    ]
    
    
    
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    "Capris & Trousers & Pants":{
    "Capris":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Waist Closure",
    type:"Dropdown",
    required:true,
    options:["Button","Drawstring","Elastic Waistband","Zip"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Croped","Full Length"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","CrissCross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Print or Pattern type",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Abstract", "Animal", "Aztec", "Bohemian", "Botanical", "Camouflage", "Checked", "Chevron",
        "Colorblocked", "Conversational", "Embellished", "Ethnic Motif", "Floral", "Geometric",
        "Graphic", "Horizontal Stripes", "Houndstooth", "Melange", "Micro Print", "Ombre",
        "Placement Print", "Polka Dots", "Quirky", "Solid", "Striped", "Tie and Dye", "Tribal",
        "Tropical", "Typography", "Vertical Stripes"
    ]
    
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Applique", "Bow", "Cut Work", "Cut Out", "Embellished", "Fringed", "Lace inserts", 
        "Layered", "Pintucks", "Pleated or Ruffled", "Pom-Poms", "Ruffles", "Sequinned", "Sheen", 
        "Smocking or Shirred", "Studded", "Tassels", "Tie-Ups", "Waist Tie-ups"
    ]
    
    
    
    },
    {
    name:"Waist Rise",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["High Rise","Low Rise","Mid Rise"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    "Trousers & Pants":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Croped","Full Length"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","CrissCross","Crochet","Dyed/Washed","Embellished","Embroidered","Printed","Self-Design","Solid","Textured"]
    },
    {
    name:"Print or Pattern type",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Abstract", "Animal", "Aztec", "Bohemian", "Botanical", "Camouflage", "Checked", "Chevron",
        "Colorblocked", "Conversational", "Embellished", "Ethnic Motif", "Floral", "Geometric",
        "Graphic", "Horizontal Stripes", "Houndstooth", "Melange", "Micro Print", "Ombre",
        "Placement Print", "Polka Dots", "Quirky", "Solid", "Striped", "Tie and Dye", "Tribal",
        "Tropical", "Typography", "Vertical Stripes"
    ]
    
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Casual","Formal","Party","Semi-Formal","sporty"]
    },
    {
    name:"Fit/Shape",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Bell Bottoms","Cargo","Chino","Cigarette","Drop-Croatch","Flat-Front","Harempants","Jogger Pants","Loose","Pencil","Pleated","Straight","Treggings"]
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Applique", "Bow", "Cut Work", "Cut Out", "Embellished", "Fringed", "Lace inserts", 
        "Layered", "Pintucks", "Pleated or Ruffled", "Pom-Poms", "Ruffles", "Sequinned", "Sheen", 
        "Smocking or Shirred", "Studded", "Tassels", "Tie-Ups", "Waist Tie-ups"
    ]
    
    
    
    },
    {
    name:"Waist Closure",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Button","Drawstring","Elastic Waistband","Zip",]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    "Sweaters & Cardigans":{
    "Cardigans":{
    allOptions:[
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Texxt",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    "Sweaters":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Fit",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Fitted","Oversized","Regular"]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Crop","Long","Regular"]
    },
    {
    name:"Neck/Collar",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Boat Neck","Built-up Collar","Button-Down","Choker","Cowl Neck","HalterNeck","Henly","High","Hood","Keyhole Neck","Mandarin Collar","Notch","Off-Shoulder"," One Shoulder","Peter Pan Collar","Polo Neck","Round Neck","Scoop Neck","Shawl Collar","Shirt Collar","Shoulder Straps","Slim Collar","Spread Collar","Square Neck","Strapless","Stylised","Surplice","Sweetheart Neck","Tie-up Neck","Turtle Neck"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Colorblocked","Dyed/Washed","Embellished","Embroidered","Printed","Self-Design","Solid","Striped"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Abstract","Animal","Applique","Azetc","Checked","Chevron","Colorblocked","Embellished","Ethnic Motif","Floral","Foil","Geometric","Graphic","Herringbone","Houndstooth","Ikat","kalamkari","Leheriya","Madhubani","Micro","Paisley","Pattu","Polka Dot","Quirky","Ribbon","Scenic","Shibori","Solid","Stripe","Tie and Dye","Tribal"]
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Sleeve Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Batwing Sleeves","Bell Sleeves","Cap Sleeves","Cape","Cold Shoulder","Cuffes Sleeves","Extended Sleeves","Flared Sleeves","Flutter Sleeves","Kimono Sleeves","Off-Sholder","One Side Sleeve","Puff Sleeves","Raglan Sleeves","Regular Sleeves","roll-up Sleeves","Shoulder Straps","Sleeveless"]
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[ "Applique","Bead & Stones","Bow","Cut Work","Cut Out","Embellished","Fringed","Lace inserts","Layered","Pintucks","Pleated or Rathered","Pom-Poms","Ruffles","Sequinned","Sheen","Smocking or Shirred","Studded","Tassels","Tie-Ups","Waist Tie-ups"]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Cardigans","Pullovers","Sweater Dress","Zippers",]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    },
    
    "Jackets":{
    "Coats & Jackets":{
    allOptions:[
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Description",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    Jackets:{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow" ]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Long","Crop","Regular"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Colorblocked","Dyed/Washed","Embellished","Embroidered","Printed","Quilted","Self-Design","Solid","Stripped","Textured"]
    },
    {
    name:"Neck/Collar",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Boat Neck", "Built-up Collar", "Button-Down", "Choker", "Cowl Neck", "Halter Neck", "Henley",
        "High Neck", "Hood", "Keyhole Neck", "Mandarin Collar", "Notch", "Off-Shoulder", "One Shoulder",
        "Peter Pan Collar", "Polo Neck", "Round Neck", "Scoop Neck", "Shawl Collar", "Shirt Collar",
        "Shoulder Straps", "Slim Collar", "Spread Collar", "Square Neck", "Strapless", "Stylized",
        "Surplice", "Sweetheart Neck", "Tie-up Neck", "Turtle Neck", "V-Neck"
    ]
    
    },
    {
    name:"Print or Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Abstract", "Animal", "Aztec", "Bohemian", "Botanical", "Camouflage", "Checked", "Chevron",
        "Colorblocked", "Conversational", "Embellished", "Ethnic Motif", "Floral", "Geometric",
        "Graphic", "Horizontal Stripes", "Houndstooth", "Melange", "Micro Print", "Ombre",
        "Placement Print", "Polka Dots", "Quirky", "Solid", "Striped", "Tie and Dye", "Tribal",
        "Tropical", "Typography", "Vertical Stripes"
    ]
    
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Sleeve Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Batwing Sleeves", "Bell Sleeves", "Cap Sleeves", "Cape", "Cold Shoulder", "Cuffed Sleeves",
        "Extended Sleeves", "Flared Sleeves", "Flutter Sleeves", "Kimono Sleeves", "Off-Shoulder",
        "One Side Sleeve", "Puff Sleeves", "Raglan Sleeves", "Regular Sleeves", "Roll-up Sleeves",
        "Shoulder Straps", "Sleeveless", "Slit Sleeves", "Thumbhole", "Tulip Sleeves"
    ]
    
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Applique", "Bow", "Cut Work", "Cut Out", "Embellished", "Fringed", "Lace inserts", 
        "Layered", "Pintucks", "Pleated or Ruffled", "Pom-Poms", "Ruffles", "Sequinned", "Sheen", 
        "Smocking or Shirred", "Studded", "Tassels", "Tie-Ups", "Waist Tie-ups"
    ]
    
    
    
    },
    {
    name:"Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Biker","Bomber","Parka","Peplum","Regular","Sports","Tailored","Teddy","Utility","Waistcoats & Vests"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    "Blazers & Coats":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolor", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:true,
    options:["Animal","Aztec","Bohemian","Botanical","Camouflage","Checked","Chevron","Colorblocked","Conversational","Embellished","Ethnic Motif","Floral","Geometric","Graphic","Horizontal Stripes","houndstooth","Melange","Micro Print","Ombre","Placement Print","Polka Dots","Quirky","Solid","Striped","Tie and Dye","Tribal","Tropical","Typography"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Fit/Shape",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Double Breasted Blazer","Duffle Coat","Peacoats & Trench Coats","single Breasted Blazer"]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Crop","Regular","Long"]
    },
    {
    name:"Neck/Collar",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[ "Boat Neck","Built-up Collar","Button-Down","Choker","Cowl Neck","Halter Neck","Henly","High","Hood","Keyhole Neck","Mandarin Collar","Notch","Off-Shoulder"," One Shoulder","Peter Pan Collar","Polo Neck","Round Neck","Scoop Neck","Shawl Collar","Shirt Collar","Shoulder Straps","Slim Collar","Spread Collar","Square Neck","Strapless","Stylised","Surplice","Sweetheart Neck","Tie-up Neck","Turtle Neck","V-Neck"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Colorblocked","Dyed/Washed","Embellished","Embroidered","Lace","Printted","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Sleeve Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Batwing Sleeves", "Bell Sleeves", "Cap Sleeves", "Cape", "Cold Shoulder", "Cuffed Sleeves",
        "Extended Sleeves", "Flared Sleeves", "Flutter Sleeves", "Kimono Sleeves", "Off-Shoulder",
        "One Side Sleeve", "Puff Sleeves", "Raglan Sleeves", "Regular Sleeves", "Roll-up Sleeves",
        "Shoulder Straps", "Sleeveless", "Slit Sleeves", "Thumbhole", "Tulip Sleeves"
    ]
    
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Applique", "Bow", "Cut Work", "Cut Out", "Embellished", "Fringed", "Lace inserts", 
        "Layered", "Pintucks", "Pleated or Ruffled", "Pom-Poms", "Ruffles", "Sequinned", "Sheen", 
        "Smocking or Shirred", "Studded", "Tassels", "Tie-Ups", "Waist Tie-ups"
    ]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    "Maternity Wear":{
    "Dresses":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Dropdown",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Dropdown",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Description",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    "Palazzos, Leggings & Tights":{
    "Leggings":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:["Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink",
    "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow"
    ]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Colorblocked","Dyed/Washed","Embellished","Lace","Printed","Self-Design"
    ,"Solid","Striped"]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Gown","Kaftan"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    "Palazzos":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:["Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow"
    ]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Colorblocked","Dyed/Washed","Embellished","Lace","Printed","Self-Design","Solid","Striped"]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Cropped","Full Length"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Abstract","Animal","Applique","Azetc","Bandhani","Batik","Block","Bohemian","Botanical","Checked","Chevron","Colorblocked","Embellished","Ethnic Motif","Floral","Foil","Geometric","Graphic","Herringbone","Houndstooth","Ikat","kalamkari","Leheriya","Madhubani","Micro","Paisley","Pattu","Polka Dot","Quirky","Ribbon","Scenic","Shibori","Solid","Stripe","Tie and Dye","Tribal","Warli","Woven Design","Zari butta"]
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Applique","Bow","Cut Work","Cut Out","Embellished","Fringed","Lace inserts","Layered","Pintucks","Pleated or Rathered","Pom-Poms","Ruffles","Sequinned","Sheen","Smocking or Shirred","Studded","Tassels","Tie-Ups","Waist Tie-ups"
    ]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Culottes","Double-Layered","Pleated","Ruffled","Sharara-Style","Straight","Tulip","Wide Leg/Flared"]
    },
    {
    name:"Waist Closure",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Button","Drawstring","Elastic Waistband","Zip"]
    },
    {
    name:"Waist Rise",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["High Rise","Low Rise","Mid Rise"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Skirts & Shorts":{
    "Shorts":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:["Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow"
    ]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[
    "Checked","Colorblocked","Dyed/Washed","Embellished","Lace","Printed","Self-Design","Solid","Striped","solid","Textured"]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Knee-Length","Mid-Thigh","Mini"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Abstract","Animal","Aztec","Bohemian","Botanical","Camouflage","Checked","Chevron"
    ,"Colorblocked","Conversational","Embellished","Ethnic Motif","Floral","Geometric","Graphic","Horizontal Stripes","houndstooth","Melange","Micro Print","Ombre","Placement Print","Polka Dots","Quirky","Solid","Striped","Tie and Dye","Tribal","Tropical","Typography"]
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Applique", "Bow", "Cut Work", "Cut Out", "Embellished", "Fringed", "Lace inserts", 
        "Layered", "Pintucks", "Pleated or Ruffled", "Pom-Poms", "Ruffles", "Sequinned", "Sheen", 
        "Smocking or Shirred", "Studded", "Tassels", "Tie-Ups", "Waist Tie-ups"
    ]
    
    
    
    },
    {
    name:"Waist Closure",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["High Rise","Low Rise",""]
    },
    {
    name:"Waist Rise",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["High Rise","Low Rise","Mid Rise"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Skirts":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue", 
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange", 
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic", "Mint Green", 
        "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach", "Pink", "Purple", 
        "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    
    
    
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[
    "Applique","Checked","Colorblocked","Dyed/Washed","Embellished","Embroidered","Lace","Printted","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Abstract","Animal","Applique","Azetc","Bandhani","Batik","Block","Bohemian","Botanical","Checked","Chevron","Colorblocked","Embellished","Ethnic Motif","Floral","Foil","Geometric","Graphic","Herringbone","Houndstooth","Ikat","kalamkari","Leheriya","Madhubani","Micro","Paisley","Pattu","Polka Dot","Quirky","Ribbon","Scenic","Shibori","Solid","Stripe","Tie and Dye","Tribal","Warli","Woven Design","Zari butta"]
    },
    {
    name:"Fit/Shape",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["A-Line","Asymmetric","Bardot","Blouson","Boxy","Bralette","Cape","Cinched Waist","Compression","Empire","Fitted","High-Low","Kaftan","Loose","Maxi","Peplum","Racerbak","Regular","Shirt Styles","Slim","Styled Back","Tank","Tiered","Tube","Tunic","Wrap"]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Above Knee","Ankle Lentgth","Calf Length","Knee Length"]
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Applique", "Bow", "Cut Work", "Cut Out", "Embellished", "Fringed", "Lace inserts", 
        "Layered", "Pintucks", "Pleated or Ruffled", "Pom-Poms", "Ruffles", "Sequinned", "Sheen", 
        "Smocking or Shirred", "Studded", "Tassels", "Tie-Ups", "Waist Tie-ups"
    ]
    
    
    
    },
    {
    name:"Waist Closure",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Button","Drawstring","Elastic Waistband","Zip"]
    },
    {
    name:"Waist Rise",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["High Rise","Low Rise","Mid Rise"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Hoodies & Sweatshirts":{
    "Sweatshirts":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue", 
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange", 
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic", "Mint Green", 
        "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach", "Pink", "Purple", 
        "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Crop","Regular","Long"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Checked", "Chikankari", "Colorblocked", "Criss Cross", "Crochet", "Dyed/Washed",
        "Embellished", "Embroidered", "Hanbok", "Lace", "Printed", "Ribbed", "Self-Design",
        "Solid", "Striped", "Woven Design", "Zari Woven"
    ]
    
    
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Abstract","Animal","All Over Point","Azetc","Bandhani","Batik","Block","Bohemian","Botanical","Checked","Chevron","Colorblocked","Embellished","Ethnic Motif","Floral","Foil","Geometric","Graphic","Herringbone","Houndstooth","Ikat","kalamkari","Leheriya","Madhubani","Micro","Paisley","Pattu","Polka Dot","Quirky","Ribbon","Scenic","Shibori","Solid","Stripe","Tie and Dye","Tribal","Tropical","Typography","Superhero"]
    },
    {
    name:"Neck/Collar",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Boat Neck", "Built-up Collar", "Button-Down", "Choker", "Cowl Neck", "Halter Neck", "Henley",
        "High Neck", "Hood", "Keyhole Neck", "Mandarin Collar", "Notch", "Off-Shoulder", "One Shoulder",
        "Peter Pan Collar", "Polo Neck", "Round Neck", "Scoop Neck", "Shawl Collar", "Shirt Collar",
        "Shoulder Straps", "Slim Collar", "Spread Collar", "Square Neck", "Strapless", "Stylized",
        "Surplice", "Sweetheart Neck", "Tie-up Neck", "Turtle Neck", "V-Neck"
    ]
    
    },
    {
    name:"Pocket Style",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Insert Pockets","Kangaroo Pockets","No Pockets"]
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Sleeve Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Bell Sleves","Cap Sleeves","Cap","Cold Shoulder","Cuffed Sleeves","Extended Sleeves","Flared Sleeves","Fluttter Sleeves","Kimono Sleeves","Puff Sleeves","Raglan Sleeves","Regular Sleeves","Roll-Up Sleeves","Shoulder Strap","SLeeveless","Slit Sleeves","Thumbhole"]
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Applique", "Bow", "Cut Work", "Cut Out", "Embellished", "Fringed", "Lace inserts", 
        "Layered", "Pintucks", "Pleated or Ruffled", "Pom-Poms", "Ruffles", "Sequinned", "Sheen", 
        "Smocking or Shirred", "Studded", "Tassels", "Tie-Ups", "Waist Tie-ups"
    ]
    
    
    
    },
    {
    name:"Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Front-Open","Pullovers","Zippers"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Tops Tshirts & Shirts":{
    "Top & Bottom Sets":{
    allOptions:[
    {
    name:"Top Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton", "Cotton Blend",
        "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette",
        "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen",
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon",
        "Poly Crepe", "Poly Georgette", "Poly Silk", "PolyCotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk",
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    },
    
    
    
    // FOOTWEAR
    "Footwear":{
    "Flats":{
    "Flats":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue", 
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange", 
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic", "Mint Green", 
        "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach", "Pink", "Purple", 
        "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    
    
    
    },
    {
    name:"Material",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Acrylonitrile", "Aluminium", "Battery", "Brass", "Canvas", "Carbon",
        "Cellulose", "Cork", "Cotton", "EVA", "Elastodiene", "Elastolefin", "Ethylene",
        "Expanded", "Foamed", "Glass", "Grey", "Iron", "Leather", "Lycra", "Lyocell", "Mesh",
        "Nubuck", "Nylon", "PVC", "Patent Leather", "Polyamide", "Polycarbonate",
        "Polycarbonate-Acrylonitrile", "Polyester", "Polyethylene", "Polymethylpentene",
        "Polymethylene", "Polypropylene", "Polyurethane", "Polyvinyl", "Pu", "Rice", "Rubber",
        "Sand", "Silicon", "Silk", "Stainless Steel", "Styrene", "Suede", "Synthetic", "Textile",
        "Thermo", "Thermoplastic", "Tritan", "Velvet", "Viscose", "Water", "Wood", "Wool", "Zinc"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options:["Brand Logo","Cartoon Characters","Colorblocked","Embellished","Perforations","Printed","Solid","Striped","Textured","Transparent","Woven design"]
    },
    {
    name:"Sole Material",
    type:"Dropdown",
    required:true,
    options:["Airmix","Croslite","Eva","Latex","Leather","Neolite","Others","Phylon","Polyureathane","Pu","Pvc","Resin","Rubber","Syntethic","Tpr","Tpu","Tunit"]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:true,
    options:["Espadrille","Galadiators","Mules","One-Toe Flats","Pimsolls","T-Strap Falts"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Fastening and Back Details",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Ankle Loop","Backstrap","Buckle","Closed back","Lace-up","No Back Strap","Openback","Slip-on","Velcro","Zip"]
    
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Casual","Ethnic Casual","Ethnic Party","Everday","Festive","Formal","Others","Wedding","Western casual","Western Party"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Bows","Buckle","Ethnic-Embellished","Glitter","Laser Cuts","Sparkles","Tassls","Western-Embellished"]
    },
    {
    name:"Toe Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Cap Toe","Open Toe","Peep Toe","Pointed Toe","Round Toe","Square Toe"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Boots":{
    "Boots":{
    allOptions:[
    {
    name:"Boot Type",
    type:"Dropdown",
    required:true,
    options:["Ankle-Length Boots","Below-The-Ankle Boots","Block-Heel Boots","Block-Heel Boots","Calf-Length Boots","Chelsea Boots","Chukka Boots","Cowboy Boots","Cuban-Heel Boots","Denim Boots","Faux-Fur Boots","Flared-Heel Boots","Fleece-Lined Booots","Fringed Boots","Her Types Of Boots","High-Heel Boots","Hiking Boots","Knee-High Boots","Lace Boots","Lace Up Boots","Leather Boots","Open-Toe Boots","Oxford Boots","Patent Leather Boots","Pu Boots","Rain Boots","Riding Boots","Slim Heal Boots","Sock Boots(Women)","Suede Boots","Velvet Boots","Wedge Boots"]
    },
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue", 
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange", 
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic", "Mint Green", 
        "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach", "Pink", "Purple", 
        "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    
    },
    {
    name:"Heel Height",
    type:"Dropdown",
    required:true,
    options:["Flat Heel","Hing Heel","Medium Heel"]
    },
    {
    name:"Material",
    type:"Dropdown",
    required:true,
    options:["Canvas","Fur","Leather","Mesh","Nubuck","Pu","Patent Leather","Plastic","Suede","Syntethic Leather","Synthetic","Textile","Velvet"]
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:true,
    options:["Casual","Dailywear","Formal","Partywear"]
    },
    {
    name:"Sole Material",
    type:"Dropdown",
    required:true,
    options:["Airmix","Croslite","Eva","Latex","Leather","Neolite","Others","Phylon","Polyureathane","Pu","Pvc","Resin","Rubber","Syntethic","Tpr","Tpu","Tunit"]
    },
    {
    name:"Country Of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Ankle Height",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["High-Top","Mid-Top","Regular"]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"]
    },
    {
    name:"Fastening and Back Details",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Ankle Loop","Backstrap","Buckle","Closed back","Lace-up","No Back Strap","Openback","Slip-on","Velcro","Zip"]
    },
    {
    name:"Heel Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Block","Comfort","Flatform","Kitten","Platform","Slim","Stiletto","Wedge"]
    },
    {
    name:"Insole",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Comfort","Comfort Insole","Eva","Leather","Memory Foam","Padded","Rubeer","Support"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Bows","Buckle","Ethnic-Embellished","Laser Cuts","Tassels","Western-Embellished","Western-Embellished"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[
    "Colorblocked","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Textured","Transparent","Woven Design"]
    },
    {
    name:"Primary Color",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolor", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    },
    {
    name:"Secondary Color",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolor", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    },
    {
    name:"Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Ballerianas","Boat Shoes","Brogues","Clogs","Derbys","Driving Shoes","Espadrilles","Flat Boots","Flatforms","Gladiators","Heeled Boots","Loafers","Mojaris","Monks","Mules","Open Toe Flats","Oxford","Peep Toes","Pumps","Sandals","Skate Shoes","Slip-on Sneakers","Sneakers","T-Strap Flats","Thong Flip-Flops","Trekking Shoes"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Heels":{
    "Heels":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue", 
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange", 
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic", "Mint Green", 
        "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach", "Pink", "Purple", 
        "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    
    
    
    },
    {
    name:"Heel Height",
    type:"Dropdown",
    required:true,
    options:["0.25 inches","0.5 inches","0.75 inches","1 inches","2 inches","3 inches","4 inches","5 inches","6 inches","7 inches","8 inches","9 inches"]
    },
    {
    name:"Material",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Acrylonitrile", "Aluminium", "Battery", "Brass", "Canvas", "Carbon",
        "Cellulose", "Cork", "Cotton", "EVA", "Elastodiene", "Elastolefin", "Ethylene",
        "Expanded", "Foamed", "Glass", "Grey", "Iron", "Leather", "Lycra", "Lyocell", "Mesh",
        "Nubuck", "Nylon", "PVC", "Patent Leather", "Polyamide", "Polycarbonate",
        "Polycarbonate-Acrylonitrile", "Polyester", "Polyethylene", "Polymethylpentene",
        "Polymethylene", "Polypropylene", "Polyurethane", "Polyvinyl", "Pu", "Rice", "Rubber",
        "Sand", "Silicon", "Silk", "Stainless Steel", "Styrene", "Suede", "Synthetic", "Textile",
        "Thermo", "Thermoplastic", "Tritan", "Velvet", "Viscose", "Water", "Wood", "Wool", "Zinc"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:true,
    options:["Casual","Ethnic Casual","Ethnic Party","Everday","Festive","Formal","Others","Wedding","Western casual","Western Party"]
    },
    {
    name:"Sole Material",
    type:"Dropdown",
    required:true,
    options:["Airmix","Croslite","Eva","Latex","Leather","Neolite","Others","Phylon","Polyureathane","Pu","Pvc","Resin","Rubber","Syntethic","Tpr","Tpu","Tunit"]
    },
    {
    name:"Country Of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Levi's","SuperDry","Celio","Zara","H&M","Pantaloons","Amigo","Amido","ArmaniExchange","FameForever","Lifestyle"
    ]
    },
    {
    name:"Fastening and Back Details",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Ankle Loop","Backstrap","Buckle","Closed back","Lace-up","No Back Strap","Openback","Slip-on","Velcro","Zip"]
    
    },
    {
    name:"Heel Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Ankle Strap heel","Block","Comfort","Comma heels","Cutout Heels","Decorative heel","Flare heel","Flatform","French Heel","high Heels","Kitten","laceup Heels","Medium Heel","Mules","Pencil Heels","Platform Pumps","Slim","Slim Heel","Slingback heel","Spool Heels","Stiletto","Thick Cuban Heel","Wedges"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Bows","Buckle","Ethnic-Embellished","Glitter","LaserCuts","Sparkles","Tassels","Western-Embellished"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Applique","Checked","Colorblocked","Dyed/Washed","Embellished","Embroidered","Lace","Printted","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Toe Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Open Toe","Peep Toe","Pointed Toe","Round Toe","Square Toe"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Flipflops & Slippers":{
    "Flipflops & Slippers":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink",
    "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow" ]
    },
    {
    name:"Material",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Acrylonitrile", "Aluminium", "Battery", "Brass", "Canvas", "Carbon",
        "Cellulose", "Cork", "Cotton", "EVA", "Elastodiene", "Elastolefin", "Ethylene",
        "Expanded", "Foamed", "Glass", "Grey", "Iron", "Leather", "Lycra", "Lyocell", "Mesh",
        "Nubuck", "Nylon", "PVC", "Patent Leather", "Polyamide", "Polycarbonate",
        "Polycarbonate-Acrylonitrile", "Polyester", "Polyethylene", "Polymethylpentene",
        "Polymethylene", "Polypropylene", "Polyurethane", "Polyvinyl", "Pu", "Rice", "Rubber",
        "Sand", "Silicon", "Silk", "Stainless Steel", "Styrene", "Suede", "Synthetic", "Textile",
        "Thermo", "Thermoplastic", "Tritan", "Velvet", "Viscose", "Water", "Wood", "Wool", "Zinc"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5"]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:true,
    options:[ "Casual","Ethnic Casual","Ethnic Party","Everday","Festive","Formal","Others","Wedding","Western casual","Western Party"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"
    ]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:true,
    options:["Hawai","kolhapuri","Sliders","Thong Flip-Flops","Wedges"]
    },
    {
    name:"Country Of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Ankle Height",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["High-Top","Mid-Top","Regular"]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Fastening and Back Details",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[ "Ankle Loop","Backstrap","Buckle","Closed back","Lace-up","No Back Strap","Open back","Slip-on","Velcro","Zip"]
    },
    {
    name:"Heel Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Ankle Strap heel","Block","Comfort","Comma heels","Cutout Heels","Decorative heel","Flare heel","Flatform","French Heel","high Heels","Kitten","laceup Heels","Medium Heel","Mules","Pencil Heels","Platform Pumps","Slim","Slim Heel","Slingback heel","Spool Heels","Stiletto","Thick Cuban Heel","Wedges"
    ]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Bows","Buckle","Ethnic-Embellished","Glitter","Laser Cuts","Sparkles","Tassels","Western-Embellished"
    ]
    },
    {
    name:"Sole Material",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Airmix","Croslite","Eva","Latex","Leather","Neolite","Others","Phylon","Polyureathane","Pu","Pvc","Resin","Rubber","Syntethic","Tpr","Tpu","Tunit"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Sliders":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolor", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    },
    {
    name:"Material",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Acrylonitrile", "Aluminium", "Battery", "Brass", "Canvas", "Carbon",
        "Cellulose", "Cork", "Cotton", "EVA", "Elastodiene", "Elastolefin", "Ethylene",
        "Expanded", "Foamed", "Glass", "Grey", "Iron", "Leather", "Lycra", "Lyocell", "Mesh",
        "Nubuck", "Nylon", "PVC", "Patent Leather", "Polyamide", "Polycarbonate",
        "Polycarbonate-Acrylonitrile", "Polyester", "Polyethylene", "Polymethylpentene",
        "Polymethylene", "Polypropylene", "Polyurethane", "Polyvinyl", "Pu", "Rice", "Rubber",
        "Sand", "Silicon", "Silk", "Stainless Steel", "Styrene", "Suede", "Synthetic", "Textile",
        "Thermo", "Thermoplastic", "Tritan", "Velvet", "Viscose", "Water", "Wood", "Wool", "Zinc"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"
    ]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options:[ "Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Sole Material",
    type:"Dropdown",
    required:true,
    options:["Airmix","Croslite","Eva","Latex","Leather","Neolite","Others","Phylon","Polyureathane","Pu","Pvc","Resin","Rubber","Syntethic","Tpr","Tpu","Tunit"]
    },
    {
    name:"Country Of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Ideal For",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Infants","kids","kids-boys","Kids-Girls","Men","Women"]
    },
    {
    name:"Insole",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Comfort","Comfort Insole","Eva","Leather","Memory Foam","Padded","Rubber","Support"]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Casual","Ethnic Casual","Ethnic Party","Everday","Festive","Formal","Others","Wedding","Western casual","Western Party"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Clogs":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink","Purple", "Red","Rust","Silver", "Teal", "White", "Yellow" ]
    },
    {
    name:"Material",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Acrylonitrile", "Aluminium", "Battery", "Brass", "Canvas", "Carbon",
        "Cellulose", "Cork", "Cotton", "EVA", "Elastodiene", "Elastolefin", "Ethylene",
        "Expanded", "Foamed", "Glass", "Grey", "Iron", "Leather", "Lycra", "Lyocell", "Mesh",
        "Nubuck", "Nylon", "PVC", "Patent Leather", "Polyamide", "Polycarbonate",
        "Polycarbonate-Acrylonitrile", "Polyester", "Polyethylene", "Polymethylpentene",
        "Polymethylene", "Polypropylene", "Polyurethane", "Polyvinyl", "Pu", "Rice", "Rubber",
        "Sand", "Silicon", "Silk", "Stainless Steel", "Styrene", "Suede", "Synthetic", "Textile",
        "Thermo", "Thermoplastic", "Tritan", "Velvet", "Viscose", "Water", "Wood", "Wool", "Zinc"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options:[ "Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"
    ]
    },
    {
    name:"Sole Material",
    type:"Dropdown",
    required:true,
    options:["Airmix","Croslite","Eva","Latex","Leather","Neolite","Others","Phylon","Polyureathane","Pu","Pvc","Resin","Rubber","Syntethic","Tpr","Tpu","Tunit"]
    },
    {
    name:"Country Of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Fastening and Back Detail",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Ankle Loop","Backstrap","Buckle","Closed back","Lace-up","No Back Strap","Openback","Slip-on","Velcro","Zip"]
    
    },
    {
    name:"Ideal For",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Kids-Boys","Kids-Girls","Men","Women","infrant","Kids"]
    },
    {
    name:"Insole",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Comfort","Comfort Insole","Eva","Leather","Memory Foam","Padded","Rubber","Support"]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Casual","Ethnic Casual","Ethnic Party","Everday","Festive","Formal","Others","Wedding","Western casual","Western Party"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Bows","Buckle","Ethnic-Embellished","Glitter","Laser Cuts","Sparkles","Tassels","Western-Embellished"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Shoes":{
    "Formal Shoes":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow"
    ]
    },
    {
    name:"Ideal For",
    type:"Dropdown",
    required:true,
    options:["Kids-Boys","Kids-Girls","Men","Women","infrant","Kids"]
    },
    {
    name:"Material",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Acrylonitrile", "Aluminium", "Battery", "Brass", "Canvas", "Carbon",
        "Cellulose", "Cork", "Cotton", "EVA", "Elastodiene", "Elastolefin", "Ethylene",
        "Expanded", "Foamed", "Glass", "Grey", "Iron", "Leather", "Lycra", "Lyocell", "Mesh",
        "Nubuck", "Nylon", "PVC", "Patent Leather", "Polyamide", "Polycarbonate",
        "Polycarbonate-Acrylonitrile", "Polyester", "Polyethylene", "Polymethylpentene",
        "Polymethylene", "Polypropylene", "Polyurethane", "Polyvinyl", "Pu", "Rice", "Rubber",
        "Sand", "Silicon", "Silk", "Stainless Steel", "Styrene", "Suede", "Synthetic", "Textile",
        "Thermo", "Thermoplastic", "Tritan", "Velvet", "Viscose", "Water", "Wood", "Wool", "Zinc"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"
    ]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options:["Applique","Checked","Colorblocked","Dyed/Washed","Embellished","Embroidered","Lace","Printted","Self-Design","Solid","Striped","Woven Design","Zari Woven"
    ]
    },
    {
    name:"Product Weight",
    type:"Dropdown",
    required:true,
    options:[".25",".50",".75","1.2","1.3","1.4","1.5","1.6","1.7","1.8","1.9","2","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","3","3.1","3.2","3.3","3.4","3.5","3.6","3.7","3.8","3.9","4","4.1","4.2","4.3",
    "4.4","4.5","4.6","4.7","4.8","4.9","5.0","5.1","5.2","5.3","5.4","5.5","5.6","5.7","5.8","5.9","6.0","6.1"
    ,"6.2","6.3","6.4","6.5","6.6","6.7","6.8","6.9","7.0","7.1","7.2","7.3","7.4","7.5","7.6","7.7","7.8","7.9","8","8.1","8.2","8.3","8.4","8.5","8.6","8.7","8.8","8.9","9","9.1","9.2","9.3","9.4","9.5","9.6","9.7","9.8","9.9","10"]
    },
    {
    name:"Product Weight Unit",
    type:"Dropdown",
    required:true,
    options:["G","KG"]
    },
    {
    name:"Sole Material",
    type:"Dropdown",
    required:true,
    options:["Airmix","Croslite","Eva","Latex","Leather","Neolite","Others","Phylon","Polyureathane","Pu","Pvc","Resin","Rubber","Syntethic","Tpr","Tpu","Tunit"]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:true,
    options:[ "Brouges","Derbys","Formal Ballerinas","Formal Mocccasion","Formal Mules","Formal Peep Toes","Formal Pumps","Formal sandals","Formal Slip Ons","Formal Slippers","Monks","Oxfords"]
    },
    {
    name:"Country Of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Ankle Height",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[ "High-Top","Mid-Top","Regular","Others"]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Fastening and Back Detail",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Ankle Loop","Backstrap","Buckle","Closed back","Lace-up","No Back Strap","Open back","Slip-on","Velcro","Zip" ]
    },
    {
    name:"Insole",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Comfort","Comfort Insole","Eva","Leather","Memory Foam","Padded","Rubber","Support"]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Casual","Ethnic Casual","Ethnic Party","Everday","Festive","Formal","Others","Wedding","Western casual","Western Party"]
    },
    {
    name:"Originals",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Bata India Ltd.", "Woodland", "Red Chief", "Liberty Shoes", "Paragon Footwear",
    "Fila", "Puma", "Reebok", "Nike", "Skechers", "Crocs", "Adidas", "Vans", "Clarks", "Converse",
    "Lee Cooper", "Hush Puppies", "Catwalk", "Metro Shoes", "Mochi", "Ruosh", "Inc.5", "Van Heusen", "Carlton London", "Action Shoes", "Lavie", "Lotto", "Sparx", "Franco Leone",
    "Provogue", "Relaxo", "Campus", "Khadim's", "Lancer", "Power", "Action", "Columbus",
    "Gliders", "Asian Shoes", "Sparx", "Liberty Warrior", "Relaxo Bahamas", "Lakhani", "Paragon Max", "VKC Pride", "Aqualite", "Columbus Sports", "Allen Cooper", "Ruosh", "Khadim's Cleo",
    "Sparx Yoddha", "Bora Bora", "Lancer Converse", "Action Bloom", "VKC Pride Plus",
    "Relexopower", "Liberty Force 10", "Fila Royce", "Campus Sutra", "Sparx Tough Walker"]
    },
    {
    name:"Primary Color",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolor", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    },
    {
    name:"Secondary Color",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolor", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    },
    {
    name:"Toe Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Cap Toe","Open Toe","Peep Toe","Pointed Toe","rund Toe","Square Toe"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Casual Shoes":{
    allOptions:[
    {
    name:"Ankle Height",
    type:"Dropdown",
    required:true,
    options:["High Top","Mid- Top","Regular"]
    },
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow" ]
    },
    {
    name:"Material",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Acrylonitrile", "Aluminium", "Battery", "Brass", "Canvas", "Carbon",
        "Cellulose", "Cork", "Cotton", "EVA", "Elastodiene", "Elastolefin", "Ethylene",
        "Expanded", "Foamed", "Glass", "Grey", "Iron", "Leather", "Lycra", "Lyocell", "Mesh",
        "Nubuck", "Nylon", "PVC", "Patent Leather", "Polyamide", "Polycarbonate",
        "Polycarbonate-Acrylonitrile", "Polyester", "Polyethylene", "Polymethylpentene",
        "Polymethylene", "Polypropylene", "Polyurethane", "Polyvinyl", "Pu", "Rice", "Rubber",
        "Sand", "Silicon", "Silk", "Stainless Steel", "Styrene", "Suede", "Synthetic", "Textile",
        "Thermo", "Thermoplastic", "Tritan", "Velvet", "Viscose", "Water", "Wood", "Wool", "Zinc"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options: [
        "Checked", "Chikankari", "Colorblocked", "Criss Cross", "Crochet", "Dyed/Washed",
        "Embellished", "Embroidered", "Hanbok", "Lace", "Printed", "Ribbed", "Self-Design",
        "Solid", "Striped", "Woven Design", "Zari Woven"
    ]
    
    
    },
    {
    name:"Sole Material",
    type:"Dropdown",
    required:true,
    options:["Airmix","Croslite","Eva","Latex","Leather","Neolite","Others","Phylon","Polyureathane","Pu","Pvc","Resin","Rubber","Syntethic","Tpr","Tpu","Tunit"]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:true,
    options:["Boat shoes","Brogues","Canvas Shoes","Driving Shoes","Espradrilles","Flatforms","Monks","Mules","Plimsolls","Slip On Sneakers","Sneakers"]
    },
    {
    name:"Country Of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Fastening and Back Detail",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Ankle Loop","Backstrap","Buckle","Closed back","Lace-up","No Back Strap","Open back","Slip-on","Velcro","Zip"
    ]
    },
    {
    name:"Insole",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Comfort","Comfort Insole","Eva","Leather","Memory Foam","Padded","Rubber","Support"]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Casual","Ethnic Casual","Ethnic Party","Everday","Festive","Formal","Others","Wedding","Western casual","Western Party"]
    },
    {
    name:"Originals",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Bata India Ltd.", "Woodland", "Red Chief", "Liberty Shoes", "Paragon Footwear",
    "Fila", "Puma", "Reebok", "Nike", "Skechers", "Crocs", "Adidas", "Vans", "Clarks", "Converse",
    "Lee Cooper", "Hush Puppies", "Catwalk", "Metro Shoes", "Mochi", "Ruosh", "Inc.5", "Van Heusen", "Carlton London", "Action Shoes", "Lavie", "Lotto", "Sparx", "Franco Leone",
    "Provogue", "Relaxo", "Campus", "Khadim's", "Lancer", "Power", "Action", "Columbus",
    "Gliders", "Asian Shoes", "Sparx", "Liberty Warrior", "Relaxo Bahamas", "Lakhani", "Paragon Max", "VKC Pride", "Aqualite", "Columbus Sports", "Allen Cooper", "Ruosh", "Khadim's Cleo",
    "Sparx Yoddha", "Bora Bora", "Lancer Converse", "Action Bloom", "VKC Pride Plus",
    "Relexopower", "Liberty Force 10", "Fila Royce", "Campus Sutra", "Sparx Tough Walker"]
    },
    {
    name:"Primary Color",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow" ]
    },
    {
    name:"Secondary Color",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink","Purple", "Red","Rust","Silver", "Teal", "White", "Yellow" ]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Sports Shoes":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow" ]
    },
    {
    name:"Material",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Acrylonitrile", "Aluminium", "Battery", "Brass", "Canvas", "Carbon",
        "Cellulose", "Cork", "Cotton", "EVA", "Elastodiene", "Elastolefin", "Ethylene",
        "Expanded", "Foamed", "Glass", "Grey", "Iron", "Leather", "Lycra", "Lyocell", "Mesh",
        "Nubuck", "Nylon", "PVC", "Patent Leather", "Polyamide", "Polycarbonate",
        "Polycarbonate-Acrylonitrile", "Polyester", "Polyethylene", "Polymethylpentene",
        "Polymethylene", "Polypropylene", "Polyurethane", "Polyvinyl", "Pu", "Rice", "Rubber",
        "Sand", "Silicon", "Silk", "Stainless Steel", "Styrene", "Suede", "Synthetic", "Textile",
        "Thermo", "Thermoplastic", "Tritan", "Velvet", "Viscose", "Water", "Wood", "Wool", "Zinc"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10" ]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options:[ "Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Sole Material",
    type:"Dropdown",
    required:true,
    options:["Airmix","Croslite","Eva","Latex","Leather","Neolite","Others","Phylon","Polyureathane","Pu","Pvc","Resin","Rubber","Syntethic","Tpr","Tpu","Tunit"]
    },
    {
    name:"Country Of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Ankle Height",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["High-Top","Mid-Top","Regular"]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Fastening and Back Detail",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Ankle Loop","Backstrap","Buckle","Closed back","Lace-up","No Back Strap","Open back","Slip-on","Velcro","Zip"]
    },
    {
    name:"Ideal For",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Kids-Boys","Kids-Girls","Men","Women","infrant","Kids"]
    },
    {
    name:"Insole",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Comfort","Comfort Insole","Eva","Leather","Memory Foam","Padded","Rubber","Support"]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Casual","Ethnic Casual","Ethnic Party","Everday","Festive","Formal","Others","Wedding","Western casual","Western Party"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Bows","Buckle","Ethnic-Embellished","Glitter","Laser Cuts","Sparkles","Tassels","Western-Embellished"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Sneakers":{
    allOptions:[
    {
    name:"Ankle Height",
    type:"Dropdown",
    required:true,
    options:["High-Top","Mid-Top","Regular"]
    },
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow"]
    },
    {
    name:"Heel Type",
    type:"Dropdown",
    required:true,
    options:["Block","Comfort","Flatform","Kitten","Platform","Slim","Stiletto","Wedge"]
    },
    {
    name:"Insole",
    type:"Dropdown",
    required:true,
    options:["Comfort","Comfort Insole","Eva","Leather","Memory Foam","Padded","Rubber","Support"]
    },
    {
    name:"Material",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Acrylonitrile", "Aluminium", "Battery", "Brass", "Canvas", "Carbon",
        "Cellulose", "Cork", "Cotton", "EVA", "Elastodiene", "Elastolefin", "Ethylene",
        "Expanded", "Foamed", "Glass", "Grey", "Iron", "Leather", "Lycra", "Lyocell", "Mesh",
        "Nubuck", "Nylon", "PVC", "Patent Leather", "Polyamide", "Polycarbonate",
        "Polycarbonate-Acrylonitrile", "Polyester", "Polyethylene", "Polymethylpentene",
        "Polymethylene", "Polypropylene", "Polyurethane", "Polyvinyl", "Pu", "Rice", "Rubber",
        "Sand", "Silicon", "Silk", "Stainless Steel", "Styrene", "Suede", "Synthetic", "Textile",
        "Thermo", "Thermoplastic", "Tritan", "Velvet", "Viscose", "Water", "Wood", "Wool", "Zinc"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:true,
    options:["Bows","Buckle","Ethnic-Embellished","Glitter","Laser Cuts","Sparkles","Tassels","Western-Embellished"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options: [
        "Checked", "Chikankari", "Colorblocked", "Criss Cross", "Crochet", "Dyed/Washed",
        "Embellished", "Embroidered", "Hanbok", "Lace", "Printed", "Ribbed", "Self-Design",
        "Solid", "Striped", "Woven Design", "Zari Woven"
    ]
    
    
    },
    {
    name:"Sole Material",
    type:"Dropdown",
    required:true,
    options:["Airmix","Croslite","Eva","Latex","Leather","Neolite","Others","Phylon","Polyureathane","Pu","Pvc","Resin","Rubber","Syntethic","Tpr","Tpu","Tunit"]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:true,
    options:["Canvas Sneakers","Chunky Sneakers","Slip-on Sneakers"]
    },
    {
    name:"Country Of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Fastening and Back Detail",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Ankle Loop","Backstrap","Buckle","Closed back","Lace-up","No Back Strap","Open back","Slip-on","Velcro","Zip"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Loafers & Moccassins":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    
    },
    {
    name:"Heel height",
    type:"Dropdown",
    required:true,
    options:["Flat Heel","High Heel","Medium Heel"]
    },
    {
    name:"Material",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Acrylonitrile", "Aluminium", "Battery", "Brass", "Canvas", "Carbon",
        "Cellulose", "Cork", "Cotton", "EVA", "Elastodiene", "Elastolefin", "Ethylene",
        "Expanded", "Foamed", "Glass", "Grey", "Iron", "Leather", "Lycra", "Lyocell", "Mesh",
        "Nubuck", "Nylon", "PVC", "Patent Leather", "Polyamide", "Polycarbonate",
        "Polycarbonate-Acrylonitrile", "Polyester", "Polyethylene", "Polymethylpentene",
        "Polymethylene", "Polypropylene", "Polyurethane", "Polyvinyl", "Pu", "Rice", "Rubber",
        "Sand", "Silicon", "Silk", "Stainless Steel", "Styrene", "Suede", "Synthetic", "Textile",
        "Thermo", "Thermoplastic", "Tritan", "Velvet", "Viscose", "Water", "Wood", "Wool", "Zinc"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:true,
    options:["Casual","Ethnic Casual","Ethnic Party","Everday","Festive","Formal","Others","Wedding","Western casual","Western Party"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options: [
        "Checked", "Chikankari", "Colorblocked", "Criss Cross", "Crochet", "Dyed/Washed",
        "Embellished", "Embroidered", "Hanbok", "Lace", "Printed", "Ribbed", "Self-Design",
        "Solid", "Striped", "Woven Design", "Zari Woven"
    ]
    
    
    },
    {
    name:"Sole Material",
    type:"Dropdown",
    required:true,
    options:["Airmix","Croslite","Eva","Latex","Leather","Neolite","Others","Phylon","Polyureathane","Pu","Pvc","Resin","Rubber","Syntethic","Tpr","Tpu","Tunit"]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:true,
    options:["Boat Shoes","Casual","Derbys","Driving Shoes","Formal","Loafers","Moccassins","Mules"]
    },
    {
    name:"Country Of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Fastening and Back Detail",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Ankle Loop","Backstrap","Buckle","Closed back","Lace-up","No Back Strap","Open back","Slip-on","Velcro","Zip"]
    },
    {
    name:"Insole",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Comfort","Comfort Insole","Eva","Leather","Memory Foam","Padded","Rubber","Support"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Bows","Buckle","Ethnic-Embellished","Glitter","Laser Cuts","Sparkles","Tassels","Western-Embellished"]
    },
    {
    name:"Primary Color",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    
    },
    {
    name:"Secondary Color",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    
    },
    {
    name:"Toe Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Cap Toe","Open Toe","Peep Toe","Pointed Toe","rund Toe","Square Toe"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Sandals":{
    "Sandals":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    
    },
    {
    name:"Heel height",
    type:"Dropdown",
    required:true,
    options:["Flat Heel","High Heel","Medium Heel"]
    },
    {
    name:"Material",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Acrylonitrile", "Aluminium", "Battery", "Brass", "Canvas", "Carbon",
        "Cellulose", "Cork", "Cotton", "EVA", "Elastodiene", "Elastolefin", "Ethylene",
        "Expanded", "Foamed", "Glass", "Grey", "Iron", "Leather", "Lycra", "Lyocell", "Mesh",
        "Nubuck", "Nylon", "PVC", "Patent Leather", "Polyamide", "Polycarbonate",
        "Polycarbonate-Acrylonitrile", "Polyester", "Polyethylene", "Polymethylpentene",
        "Polymethylene", "Polypropylene", "Polyurethane", "Polyvinyl", "Pu", "Rice", "Rubber",
        "Sand", "Silicon", "Silk", "Stainless Steel", "Styrene", "Suede", "Synthetic", "Textile",
        "Thermo", "Thermoplastic", "Tritan", "Velvet", "Viscose", "Water", "Wood", "Wool", "Zinc"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:[ "1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:true,
    options:[ "Casual","Ethnic Casual","Ethnic Party","Everday","Festive","Formal","Others","Wedding","Western casual","Western Party"]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:true,
    options:["Cutout Sandals","Gladiators","Heeled Boots","Peep Toes","Platform Sandals","Pumps","Sandals","T-Strap Sandals"]
    },
    {
    name:"Country Of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Ankle Height",
    type:"Dropdown",
    required:true,
    options:["High-Top","Mid-Top","Reglar"]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false,
    options:[]
    },
    {
    name:"Fastening and Back Detail",
    type:"Dropdown",
    required:false,
    options:["Ankle Loop","Backstrap","Buckle","Closed back","Lace-up","No Back Strap","Open back","Slip-on","Velcro","Zip"]
    },
    {
    name:"Heel Type",
    type:"Dropdown",
    required:false,
    options:["Block","Comfort","Flatform","Kitten","Platform","Slim","Stiletto","Wedge"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:false,
    options:["Bows","Buckle","Ethnic-Embellished","Glitter","Laser Cuts","Sparkles","Tassels","Western-Embellished"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false,
    options: [
        "Checked", "Chikankari", "Colorblocked", "Criss Cross", "Crochet", "Dyed/Washed",
        "Embellished", "Embroidered", "Hanbok", "Lace", "Printed", "Ribbed", "Self-Design",
        "Solid", "Striped", "Woven Design", "Zari Woven"
    ]
    },
    {
    name:"Sole Material",
    type:"Dropdown",
    required:false,
    options:["Airmix","Croslite","Eva","Latex","Leather","Neolite","Others","Phylon","Polyureathane","Pu","Pvc","Resin","Rubber","Syntethic","Tpr","Tpu","Tunit"]
    },
    {
    name:"Toe Type",
    type:"Dropdown",
    required:false,
    options: ["Cap Toe","Open Toe","Peep Toe","Pointed Toe","rund Toe","Square Toe"]
    },
    {
    name:"Description",
    type:"Text",
    required:false,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Floaters":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    
    },
    {
    name:"Material",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Acrylonitrile", "Aluminium", "Battery", "Brass", "Canvas", "Carbon",
        "Cellulose", "Cork", "Cotton", "EVA", "Elastodiene", "Elastolefin", "Ethylene",
        "Expanded", "Foamed", "Glass", "Grey", "Iron", "Leather", "Lycra", "Lyocell", "Mesh",
        "Nubuck", "Nylon", "PVC", "Patent Leather", "Polyamide", "Polycarbonate",
        "Polycarbonate-Acrylonitrile", "Polyester", "Polyethylene", "Polymethylpentene",
        "Polymethylene", "Polypropylene", "Polyurethane", "Polyvinyl", "Pu", "Rice", "Rubber",
        "Sand", "Silicon", "Silk", "Stainless Steel", "Styrene", "Suede", "Synthetic", "Textile",
        "Thermo", "Thermoplastic", "Tritan", "Velvet", "Viscose", "Water", "Wood", "Wool", "Zinc"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options:["Applique","Checked","Colorblocked","Dyed/Washed","Embellished","Embroidered","Lace","Printted","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:true,
    options:["Brouges","Derbys","Formal Ballerinas","Formal Mocccasion","Formal Mules","Formal Peep Toes","Formal Pumps","Formal sandals","Formal Slip Ons","Formal Slippers","Monks","Oxfords"]
    },
    {
    name:"Country Of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Ankle Height",
    type:"Dropdown",
    required:true,
    options:["High-Top","Mid-Top","others","Regular"]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false,
    options:[]
    },
    {
    name:"Fastening and Back Detail",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[ "Ankle Loop","Backstrap","Buckle","Closed back","Lace-up","No Back Strap","Open back","Slip-on","Velcro","Zip"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Bows","Buckle","Ethnic-Embellished","Glitter","Laser Cuts","Sparkles","Tassels","Western-Embellished"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Checked", "Chikankari", "Colorblocked", "Criss Cross", "Crochet", "Dyed/Washed",
        "Embellished", "Embroidered", "Hanbok", "Lace", "Printed", "Ribbed", "Self-Design",
        "Solid", "Striped", "Woven Design", "Zari Woven"
    ]
    
    
    },
    {
    name:"Sole Material",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Airmix","Croslite","Eva","Latex","Leather","Neolite","Others","Phylon","Polyureathane","Pu","Pvc","Resin","Rubber","Syntethic","Tpr","Tpu","Tunit"]
    },
    {
    name:"Closure Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Ankle Loop","Backstrap","Buckle","Closed Back","Lace Up","Open Back","Slip-On","Velcro","Zip"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Bellies & Juttis":{
    "Bellies":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolor", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    },
    {
    name:"Heel Height(inches)",
    type:"Dropdown",
    required:true,
    options:[".25",".50",".75","1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Material",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Acrylonitrile", "Aluminium", "Battery", "Brass", "Canvas", "Carbon",
        "Cellulose", "Cork", "Cotton", "EVA", "Elastodiene", "Elastolefin", "Ethylene",
        "Expanded", "Foamed", "Glass", "Grey", "Iron", "Leather", "Lycra", "Lyocell", "Mesh",
        "Nubuck", "Nylon", "PVC", "Patent Leather", "Polyamide", "Polycarbonate",
        "Polycarbonate-Acrylonitrile", "Polyester", "Polyethylene", "Polymethylpentene",
        "Polymethylene", "Polypropylene", "Polyurethane", "Polyvinyl", "Pu", "Rice", "Rubber",
        "Sand", "Silicon", "Silk", "Stainless Steel", "Styrene", "Suede", "Synthetic", "Textile",
        "Thermo", "Thermoplastic", "Tritan", "Velvet", "Viscose", "Water", "Wood", "Wool", "Zinc"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:true,
    options:["Casual","Ethnic Casual","Ethnic Party","Everday","Festive","Formal","Others","Wedding","Western casual","Western Party"]
    },
    {
    name:"Country Of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Ankle Height",
    type:"Dropdown",
    required:true,
    options:["High-top","Mid-Top","Regular"]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Fastening and Back Detail",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[ "Ankle Loop","Backstrap","Buckle","Closed back","Lace-up","No Back Strap","Open back","Slip-on","Velcro","Zip"]
    },
    {
    name:"Heel Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Block","Comfort","Flatform","Kitten","Platform","Slim","Stiletto","Wedge"]
    },
    {
    name:"Insole",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Comfort","Comfort Insole","Eva","Leather","Memory Foam","Padded","Rubber","Support"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Bows","Buckle","Ethnic-Embellished","Glitter","Laser Cuts","Sparkles","Tassels","Western-Embellished"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Checked", "Chikankari", "Colorblocked", "Criss Cross", "Crochet", "Dyed/Washed",
        "Embellished", "Embroidered", "Hanbok", "Lace", "Printed", "Ribbed", "Self-Design",
        "Solid", "Striped", "Woven Design", "Zari Woven"
    ]
    
    
    },
    {
    name:"Sole Material",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Airmix","Croslite","Eva","Latex","Leather","Neolite","Others","Phylon","Polyureathane","Pu","Pvc","Resin","Rubber","Syntethic","Tpr","Tpu","Tunit"]
    },
    {
    name:"Toe Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Cap Toe","Open Toe","Peep Toe","Pointed Toe","rund Toe","Square Toe"]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Boat shoes","Brogues","Canvas Shoes","Driving Shoes","Espradrilles","Flatforms","Monks","Mules","Plimsolls","Slip On Sneakers”,”Sneakers","Brouges","Derbys","Formal Ballerinas","Formal Mocccasion","Formal Mules","Formal Peep Toes","Formal Pumps","Formal sandals","Formal Slip Ons","Formal Slippers","Monks","Oxfords"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Juttis & Mojaris":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolor", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    },
    {
    name:"Heel Height(inches)",
    type:"Dropdown",
    required:true,
    options:[".25",".50",".75","1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Material",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Acrylonitrile", "Aluminium", "Battery", "Brass", "Canvas", "Carbon",
        "Cellulose", "Cork", "Cotton", "EVA", "Elastodiene", "Elastolefin", "Ethylene",
        "Expanded", "Foamed", "Glass", "Grey", "Iron", "Leather", "Lycra", "Lyocell", "Mesh",
        "Nubuck", "Nylon", "PVC", "Patent Leather", "Polyamide", "Polycarbonate",
        "Polycarbonate-Acrylonitrile", "Polyester", "Polyethylene", "Polymethylpentene",
        "Polymethylene", "Polypropylene", "Polyurethane", "Polyvinyl", "Pu", "Rice", "Rubber",
        "Sand", "Silicon", "Silk", "Stainless Steel", "Styrene", "Suede", "Synthetic", "Textile",
        "Thermo", "Thermoplastic", "Tritan", "Velvet", "Viscose", "Water", "Wood", "Wool", "Zinc"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options: [
        "Checked", "Chikankari", "Colorblocked", "Criss Cross", "Crochet", "Dyed/Washed",
        "Embellished", "Embroidered", "Hanbok", "Lace", "Printed", "Ribbed", "Self-Design",
        "Solid", "Striped", "Woven Design", "Zari Woven"
    ]
    
    
    },
    {
    name:"Sole Material",
    type:"Dropdown",
    required:true,
    options:["Airmix","Croslite","Eva","Latex","Leather","Neolite","Others","Phylon","Polyureathane","Pu","Pvc","Resin","Rubber","Syntethic","Tpr","Tpu","Tunit"]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:true,
    options:["Boat shoes","Brogues","Canvas Shoes","Driving Shoes","Espradrilles","Flatforms","Monks","Mules","Plimsolls","Slip On Sneakers”,”Sneakers","Brouges","Derbys","Formal Ballerinas","Formal Mocccasion","Formal Mules","Formal Peep Toes","Formal Pumps","Formal sandals","Formal Slip Ons","Formal Slippers","Monks","Oxfords"]
    },
    {
    name:"Country Of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Fastening and Back Detail",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[ "Ankle Loop","Backstrap","Buckle","Closed back","Lace-up","No Back Strap","Open back","Slip-on","Velcro","Zip"]
    },
    {
    name:"Insole",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Comfort","Comfort Insole","Eva","Leather","Memory Foam","Padded","Rubber","Support"]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Casual","Ethnic Casual","Ethnic Party","Everday","Festive","Formal","Others","Wedding","Western casual","Western Party"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Bows","Buckle","Ethnic-Embellished","Glitter","Laser Cuts","Sparkles","Tassels","Western-Embellished"]
    },
    {
    name:"Primary Color",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolor", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    },
    {
    name:"Secondary Color",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White", "Blue",
        "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey", "Grey Melange",
        "Khaki", "Lavender", "Lemon Yellow", "Light Multicolor", "Maroon", "Metallic",
        "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
        "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
    ]
    
    },
    {
    name:"Toe Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Cap Toe","Open Toe","Peep Toe","Pointed Toe","rund Toe","Square Toe"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    },
    
    
    
    // "ETHNIC WEAR"
    "Ethnic Wear":{
    "Kurtis, Sets & Fabrics":{
    "Kurta Sets":{
    allOptions:[
    {
    name:"Bottom Type",
    type:"Dropdown",
    required:true,
    options:["Churidar","Dhoti Pants","Gharara","Harem Pants","legging","No Bottomwear","Palazzos","pants","Patiala","Pyjamas","Salwar","Sharara","Skirt","trousers","Tulip pants"]
    },
    {
    name:"Bottomwear Color",
    type:"Dropdown",
    required:true,
    options:["Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Bottomwear Fabric",
    type:"Dropdown",
    required:true,
    options:["Acrylic","Art Silk","Bamboo","Chambray","Chanderi Silk",
    "Chiffon","Cotton", "cotton Blend","Cotton Cambric","Cotton Lenin","Cotton Silk","Crepe","Denim","Dupion Silk","Georgette","Jacquard","Jute Cotton","Jute Silk","Khadi Cotton","Kora Muslin","Lace","Leather","Linen","Lyocell","Modal","Mulmul","Net","Nylon","Organza","Paper Silk","Pashmina","Poly Chiffon","Poly Crepe","Poly Georgette","Polysilk","PolyCotton","Polyster","Rayon","RayonSlub","Satin","Scuba","Shantoon","Silk","Silk Blend","Soft Silk","Super Net","TaffetaSilk","Tissue","Tussar Silk","Velvet","Vichitra Silk","Viscose","Viscose Rayon","Voile","Wool"]
    },
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:["Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow" ]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net", "Nylon",
        "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette",
        "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub", "Satin", "Scuba",
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", "Tissue",
        "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Fit/Shape",
    type:"Dropdown",
    required:true,
    options:["A-Line","Asymmetric","Backless","Bardot","Blouson","Boxy","Bralette","Cami","Cape","Cinched Waist","Compression","Empire","Fish Cut","Flared","HighSlit","High-Low","Kaftan","Loose","Maxi","Oversized","Peplum","Racerback","Regular",
    "Shirt Styles","slim","Spaghetti","Styled Back","Tank","Tube","Tunic","Wrap"]
    },
    {
    name:"Kurta Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Kurta Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net", "Nylon",
        "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette",
        "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub", "Satin", "Scuba",
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", "Tissue",
        "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Length",
    type:"Dropdown",
    required:true,
    options:["Above Knee","Ankle Length","Calf Length","Knee Length"]
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Neck",
    type:"Dropdown",
    required:true,
    options: [
        "Boat Neck", "Built-up Collar", "Button-Down", "Choker", "Cowl Neck", "Halter Neck",
        "Henley", "High Neck", "Hood", "Keyhole Neck", "Mandarin Collar", "Notch", "Off-Shoulder",
        "One Shoulder", "Peter Pan Collar", "Polo Neck", "Round Neck", "Scoop Neck", "Shawl Collar",
        "Shirt Collar", "Shoulder Straps", "Slim Collar", "Spread Collar", "Square Neck", "Strapless",
        "Stylised", "Surplice", "Sweetheart Neck", "Tie-up Neck", "Turtle Neck", "V-Neck"
    ]
    
    
    },
    {
    name:"Set Type",
    type:"Dropdown",
    required:true,
    options:["Krta With Bottomwear","Kurta with Dupatta","Kurta with Dupatta And Bottomwear"]
    },
    {
    name:"Stitch Type",
    type:"Dropdown",
    required:true,
    options:["Semi-Stitched","Stitched","Unstiched"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Daily","Festive","Maternity","Office","Party","Wedding"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Aari Work","Applique","Beads & Stones","Brocade","Brooch","Cutwork","Embroidered","Frills","Gota Work","Jacquard"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Applique","Checked","Colorblocked","Dyed/Washed","Embellished","Embroidered","Lace","Printted","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Abstract", "Animal", "Applique", "Aztec", "Bandhani", "Batik", "Block", "Bohemian",
        "Botanical", "Checked", "Chevron", "Colorblocked", "Embellished", "Ethnic Motif",
        "Floral", "Foil", "Geometric", "Graphic", "Herringbone", "Houndstooth", "Ikat",
        "Kalamkari", "Leheriya", "Madhubani", "Micro", "Paisley", "Pattu", "Polka Dot",
        "Quirky", "Ribbon", "Scenic", "Shibori", "Solid", "Stripe", "Tie and Dye", "Tribal",
        "Warli", "Woven Design", "Zari Butta"
    ]
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[ "Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Sleeve Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Batwing Sleeves","Bell Sleeves","Cap Sleeves","Cape","Cold Shoulder","Cuffes Sleeves","Extended Sleeves","Flared Sleeves","FlutterSleeves","Kimono Sleeves","Off-Sholder","One Side Sleeve","Puff Sleeves","Raglan Sleeves","Regular Sleeves","roll-up Sleeves","Shoulder Straps","Sleeveless","Slit Sleeves","Thumbhole","Tulip Sleeves"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Kurtis":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Combo Of",
    type:"Dropdown",
    required:true,
    options:["Combo of 2","Combo of 3","Combo of 4","Combo of 5","Combo of 6","Couple Set","Kurti With Saree","Single"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net", "Nylon",
        "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette",
        "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub", "Satin", "Scuba",
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", "Tissue",
        "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Fit/Shape",
    type:"Dropdown",
    required:true,
    options:["A-Line","Asymmetric","Bardot","Blouson","Boxy","Bralette","Cape","Cinched Waist","Compression","Empire","Fitted","High-Low","Kaftan","Loose","Maxi","Peplum",
    "Racerback","Regular","Shirt Styles","Slim","Styled Back","Tank","Tiered","Tube","Tunic","Wrap"]
    },
    {
    name:"Neck",
    type:"Dropdown",
    required:true,
    options: [
        "Boat Neck", "Built-up Collar", "Button-Down", "Choker", "Cowl Neck", "Halter Neck",
        "Henley", "High Neck", "Hood", "Keyhole Neck", "Mandarin Collar", "Notch", "Off-Shoulder",
        "One Shoulder", "Peter Pan Collar", "Polo Neck", "Round Neck", "Scoop Neck", "Shawl Collar",
        "Shirt Collar", "Shoulder Straps", "Slim Collar", "Spread Collar", "Square Neck", "Strapless",
        "Stylised", "Surplice", "Sweetheart Neck", "Tie-up Neck", "Turtle Neck", "V-Neck"
    ]
    
    
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:true,
    options:["Daily","Festive","Maternity","Office","Party","Wedding"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:true,
    options:["Embroidery", "Zari work", "Sequins", "Beadwork", "Mirror work",
    "Patchwork", "Appliqué", "Stone work", "Gota patti", "Thread work", "Resham work",
    "Zardozi work", "Dabka work", "Aari work", "Kantha work", "Phulkari work", "Cutwork",
    "Ribbon work", "Tassel work", "Block printing", "Appliqué with mirror work", "Kundan work", "Gota work", "Shell work", "Piping", "Ribbon embroidery", "Kalamkari print",
    "Batik print"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options:[ "Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:true,
    options: [
        "Abstract", "Animal", "Applique", "Aztec", "Bandhani", "Batik", "Block", "Bohemian",
        "Botanical", "Checked", "Chevron", "Colorblocked", "Embellished", "Ethnic Motif",
        "Floral", "Foil", "Geometric", "Graphic", "Herringbone", "Houndstooth", "Ikat",
        "Kalamkari", "Leheriya", "Madhubani", "Micro", "Paisley", "Pattu", "Polka Dot",
        "Quirky", "Ribbon", "Scenic", "Shibori", "Solid", "Stripe", "Tie and Dye", "Tribal",
        "Warli", "Woven Design", "Zari Butta"
    ]
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:true,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Stitch Type",
    type:"Dropdown",
    required:true,
    options:["Semi-Stitched","Stitched","Unstiched"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Dropdown",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Dropdown",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Above Knee","Ankle Length","Calf Length","Knee Length"]
    },
    {
    name:"Sleeve Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Batwing Sleeves", "Bell Sleeves", "Cap Sleeves", "Cape", "Cold Shoulder",
        "Cuffed Sleeves", "Extended Sleeves", "Flared Sleeves", "Flutter Sleeves",
        "Kimono Sleeves", "Off-Shoulder", "One Side Sleeve", "Puff Sleeves", "Raglan Sleeves",
        "Regular Sleeves", "Roll-up Sleeves", "Shoulder Straps", "Sleeveless", "Slit Sleeves",
        "Thumbhole", "Tulip Sleeves"
    ]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Kurti Fabrics":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Combo Of",
    type:"Dropdown",
    required:true,
    options:["Combo of 2","Combo of 3","Combo of 4","Combo of 5","Combo of 6","Couple Set","Kurti With Saree","Single"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net", "Nylon",
        "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette",
        "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub", "Satin", "Scuba",
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", "Tissue",
        "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Fabric Length",
    type:"Dropdown",
    required:true,
    options:["2 Meters","2.5 Meters","3 Meters","3.5 Meters","4 Meters","4.5 Meters","5 Meters","5.5 Meters","6 Meters"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:true,
    options:["Embroidery", "Zari work", "Sequins", "Beadwork", "Mirror work",
    "Patchwork", "Appliqué", "Stone work", "Gota patti", "Thread work", "Resham work",
    "Zardozi work", "Dabka work", "Aari work", "Kantha work", "Phulkari work", "Cutwork",
    "Ribbon work", "Tassel work", "Block printing", "Appliqué with mirror work", "Kundan work", "Gota work", "Shell work", "Piping", "Ribbon embroidery", "Kalamkari print",
    "Batik print"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:true,
    options: [
        "Abstract", "Animal", "Applique", "Aztec", "Bandhani", "Batik", "Block", "Bohemian",
        "Botanical", "Checked", "Chevron", "Colorblocked", "Embellished", "Ethnic Motif",
        "Floral", "Foil", "Geometric", "Graphic", "Herringbone", "Houndstooth", "Ikat",
        "Kalamkari", "Leheriya", "Madhubani", "Micro", "Paisley", "Pattu", "Polka Dot",
        "Quirky", "Ribbon", "Scenic", "Shibori", "Solid", "Stripe", "Tie and Dye", "Tribal",
        "Warli", "Woven Design", "Zari Butta"
    ]
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Dupatta Sets":{
    allOptions:[
    {
    name:"Bottom Type",
    type:"Dropdown",
    required:true,
    options:["Churidar","Dhoti Pants","Gharara","Harem Pants","legging","No Bottomwear","Palazzos","pants","Patiala","Pyjamas","Salwar","Sharara","Skirt","trousers","Tulip pants"]
    },
    {
    name:"Bottomwear Color",
    type:"Dropdown",
    required:true,
    options:["Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "GreyMelange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Bottomwear Fabric",
    type:"Dropdown",
    required:true,
    options:["Acrylic","Art Silk","Bamboo","Chambray","Chanderi Silk", "Chiffon","Cotton",
    "cotton Blend","Cotton Cambric","Cotton Lenin","Cotton Silk","Crepe","Denim","Dupion Silk","Georgette","Jacquard","Jute Cotton","Jute Silk","Khadi Cotton","Kora Muslin","Lace","Leather","Linen","Lyocell","Modal","Mulmul","Net","Nylon","Organza","Paper Silk","Pashmina","Poly Chiffon","Poly Crepe","Poly Georgette","Polysilk","PolyCotton","Polyster","Rayon","Rayon Slub","Satin","Scuba","Shantoon","Silk","Silk Blend","Soft Silk","Super Net","Taffeta Silk","Tissue","Tussar Silk","Velvet","Vichitra Silk","Viscose","Viscose Rayon","Voile","Wool"]
    },
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options:["Acrylic","Art Silk","Bamboo","Chambray","Chanderi Silk", "Chiffon","Cotton",
    "cotton Blend","Cotton Cambric","Cotton Lenin","Cotton Silk","Crepe","Denim","Dupion Silk","Georgette","Jacquard","Jute Cotton","Jute Silk","Khadi Cotton","Kora Muslin","Lace","Leather","Linen","Lyocell","Modal","Mulmul","Net","Nylon","Organza","Paper Silk","Pashmina","Poly Chiffon","Poly Crepe","Poly Georgette","Poly silk","PolyCotton","Polyster","Rayon","Rayon Slub","Satin","Scuba","Shantoon","Silk","Silk Blend","Soft Silk","Super Net","Taffeta Silk","Tissue","Tussar Silk","Velvet","Vichitra Silk","Viscose","Viscose Rayon","Voile","Wool"]
    },
    {
    name:"Fit/Shape",
    type:"Dropdown",
    required:true,
    options:["A-Line","Asymmetric","Bardot","Blouson","Boxy","Bralette","Cape","Cinched Waist","Compression","Empire","Fitted","High-Low","Kaftan","Loose","Maxi","Peplum",
    "Racerback","Regular","Shirt Styles","Slim","Styled Back","Tank","Tiered","Tube","Tunic","Wrap"]
    },
    {
    name:"Kurta Color",
    type:"Dropdown",
    required:true,
    options:["Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Kurta Fabric",
    type:"Dropdown",
    required:true,
    options:["Acrylic","Art Silk","Bamboo","Chambray","Chanderi Silk", "Chiffon","Cotton",
    "cotton Blend","Cotton Cambric","Cotton Lenin","Cotton Silk","Crepe","Denim","Dupion Silk","Georgette","Jacquard","Jute Cotton","Jute Silk","Khadi Cotton","Kora Muslin","Lace","Leather","Linen","Lyocell","Modal","Mulmul","Net","Nylon","Organza","Paper Silk","Pashmina","Poly Chiffon","Poly Crepe","Poly Georgette","Polysilk","PolyCotton","Polyster","Rayon","Rayon Slub","Satin","Scuba","Shantoon","Silk","Silk Blend","Soft Silk","Super Net","Taffeta Silk","Tissue","Tussar Silk","Velvet","Vichitra Silk","Viscose","Viscose Rayon","Voile","Wool"]
    },
    {
    name:"Set Type",
    type:"Dropdown",
    required:true,
    options:["Kurta with Bottomwear","Kurta With Dupatta","Kurta With Dupatta and Bottomwear"]
    },
    {
    name:"Stitch Type",
    type:"Dropdown",
    required:true,
    options:["Semi-Stitched","Stitched","Unstiched"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Above Knee","Ankle Length","Calf Length","Knee Length"]
    },
    {
    name:"Neck",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Boat Neck", "Built-up Collar", "Button-Down", "Choker", "Cowl Neck", "Halter Neck",
        "Henley", "High Neck", "Hood", "Keyhole Neck", "Mandarin Collar", "Notch",
        "Off-Shoulder", "One Shoulder", "Peter Pan Collar", "Polo Neck", "Round Neck",
        "Scoop Neck", "Shawl Collar", "Shirt Collar", "Shoulder Straps", "Slim Collar",
        "Spread Collar", "Square Neck", "Strapless", "Stylized", "Surplice",
        "Sweetheart Neck", "Tie-up Neck", "Turtle Neck", "V-Neck"
    ]
    
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Daily","Festive","Maternity","Office","Party","Wedding"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Embroidery", "Zari work", "Sequins", "Beadwork", "Mirror work", "Patchwork",
    "Appliqué", "Stone work", "Gota patti", "Thread work", "Resham work", "Zardozi work",
    "Dabka work", "Aari work", "Kantha work", "Phulkari work", "Cutwork", "Ribbon work",
    "Tassel work", "Block printing", "Appliqué with mirror work", "Kundan work", "Gotawork", "Shell work", "Piping", "Ribbon embroidery", "Kalamkari print", "Batik print"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","CrissCross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Abstract", "Animal", "Applique", "Aztec", "Bandhani", "Batik", "Block", "Bohemian",
        "Botanical", "Checked", "Chevron", "Colorblocked", "Embellished", "Ethnic Motif",
        "Floral", "Foil", "Geometric", "Graphic", "Herringbone", "Houndstooth", "Ikat",
        "Kalamkari", "Leheriya", "Madhubani", "Micro", "Paisley", "Pattu", "Polka Dot",
        "Quirky", "Ribbon", "Scenic", "Shibori", "Solid", "Stripe", "Tie and Dye", "Tribal",
        "Warli", "Woven Design", "Zari Butta"
    ]
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Sleeve Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Batwing Sleeves", "Bell Sleeves", "Cap Sleeves", "Cape", "Cold Shoulder",
        "Cuffed Sleeves", "Extended Sleeves", "Flared Sleeves", "Flutter Sleeves",
        "Kimono Sleeves", "Off-Shoulder", "One Side Sleeve", "Puff Sleeves", "Raglan Sleeves",
        "Regular Sleeves", "Roll-up Sleeves", "Shoulder Straps", "Sleeveless", "Slit Sleeves",
        "Thumbhole", "Tulip Sleeves"
    ]
    
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Sarees, Blouses & Petticoats":{
    "Sarees":{
    allOptions:[
    {
    name:"Blouse",
    type:"Dropdown",
    required:true,
    options:["Running Blouse","Saree With Multiple Blouse","Semi-StichedBlouse","Seperate Blouse Piece","Stitched Blouse","Without Blouse"]
    },
    {
    name:"Blouse Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", 
        "Cotton", "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", 
        "Crepe", "Denim", "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", 
        "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen", 
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", 
        "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette", "Poly silk", 
        "PolyCotton", "Polyster", "Rayon", "Rayon Slub", "Satin", "Scuba", 
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", 
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", 
        "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Border",
    type:"Dropdown",
    required:true,
    options:["Embellished","Embroidered","Lace","No Border","Printed","Solid","Temple Border","Woven Design","Zari"]
    },
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Saree Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", 
        "Cotton", "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", 
        "Crepe", "Denim", "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", 
        "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen", 
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", 
        "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette", "Poly silk", 
        "PolyCotton", "Polyster", "Rayon", "Rayon Slub", "Satin", "Scuba", 
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", 
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", 
        "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Transparency",
    type:"Dropdown",
    required:true,
    options:["No","Yes"]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:true,
    options:["Embroidery", "Zari work", "Sequins", "Beadwork", "Mirror work", "Patchwork",
    "Appliqué", "Stone work", "Gota patti", "Thread work", "Resham work", "Zardozi work",
    "Dabka work", "Aari work", "Kantha work", "Phulkari work", "Cutwork", "Ribbon work",
    "Tassel work", "Block printing", "Appliqué with mirror work", "Kundan work", "Gotawork", "Shell work", "Piping", "Ribbon embroidery", "Kalamkari print", "Batik print"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Blouse Color",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Blouse Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[ "Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Border Width",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Big Border","No","No Border","Small Border"]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Loom Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Handloom","Powerloom"]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Daily","Festive","Maternity","Office","Party","Wedding"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Embroidery", "Zari work", "Sequins", "Beadwork", "Mirror work", "Patchwork",
    "Appliqué", "Stone work", "Gota patti", "Thread work", "Resham work", "Zardozi work",
    "Dabka work", "Aari work", "Kantha work", "Phulkari work", "Cutwork", "Ribbon work",
    "Tassel work", "Block printing", "Appliqué with mirror work", "Kundan work", "Gotawork", "Shell work", "Piping", "Ribbon embroidery", "Kalamkari print", "Batik print"]
    },
    {
    name:"Pallu Details",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Colourblock","Embellished","Embroidered","Half &Half","Printed","Jacquard","Printed","Same as Border","Solid","Woven Design","ZariWoven"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","CrissCross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Abstract", "Animal", "Applique", "Aztec", "Bandhani", "Batik", "Block", "Bohemian",
        "Botanical", "Checked", "Chevron", "Colorblocked", "Embellished", "Ethnic Motif",
        "Floral", "Foil", "Geometric", "Graphic", "Herringbone", "Houndstooth", "Ikat",
        "Kalamkari", "Leheriya", "Madhubani", "Micro", "Paisley", "Pattu", "Polka Dot",
        "Quirky", "Ribbon", "Scenic", "Shibori", "Solid", "Stripe", "Tie and Dye", "Tribal",
        "Warli", "Woven Design", "Zari Butta"
    ]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Saree Shapewear & Petticoats":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", 
        "Cotton", "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", 
        "Crepe", "Denim", "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", 
        "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen", 
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", 
        "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette", "Poly silk", 
        "PolyCotton", "Polyster", "Rayon", "Rayon Slub", "Satin", "Scuba", 
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", 
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", 
        "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Inner Fabric",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", 
        "Cotton", "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", 
        "Crepe", "Denim", "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", 
        "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen", 
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", 
        "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette", "Poly silk", 
        "PolyCotton", "Polyster", "Rayon", "Rayon Slub", "Satin", "Scuba", 
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", 
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", 
        "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","CrissCross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Fish Cut","Flared","Long","Normal"]
    },
    {
    name:"Waist Closure",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Button","Drawstring","Slip-on","Zip"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    Blouses:{
    allOptions:[
    {
    name:"Back Type",
    type:"Dropdown",
    required:true,
    options:["Backless","Collar","Deep SCoop","Loop","Mid Scoop","Paan","Round Neck","Square Neck","Stylished","V Neck"]
    },
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", 
        "Cotton", "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", 
        "Crepe", "Denim", "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", 
        "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace", "Leather", "Linen", 
        "Lyocell", "Modal", "Mulmul", "Net", "Nylon", "Organza", "Paper Silk", 
        "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette", "Poly silk", 
        "PolyCotton", "Polyster", "Rayon", "Rayon Slub", "Satin", "Scuba", 
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", 
        "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", 
        "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Loom Type",
    type:"Dropdown",
    required:true,
    options:["Handloom","Powerloom"]
    },
    {
    name:"Neck",
    type:"Dropdown",
    required:true,
    options: [
        "Boat Neck", "Built-up Collar", "Button-Down", "Choker", "Cowl Neck", "Halter Neck",
        "Henley", "High Neck", "Hood", "Keyhole Neck", "Mandarin Collar", "Notch", "Off-Shoulder",
        "One Shoulder", "Peter Pan Collar", "Polo Neck", "Round Neck", "Scoop Neck", "Shawl Collar",
        "Shirt Collar", "Shoulder Straps", "Slim Collar", "Spread Collar", "Square Neck", "Strapless",
        "Stylised", "Surplice", "Sweetheart Neck", "Tie-up Neck", "Turtle Neck", "V-Neck"
    ]
    
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Occassion",
    type:"Dropdown",
    required:true,
    options:["Bridal","Daily","Festive","Party","Traditional","Wedding"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:true,
    options:["Embroidery", "Zari work", "Sequins", "Beadwork", "Mirror work", "Patchwork",
    "Appliqué", "Stone work", "Gota patti", "Thread work", "Resham work", "Zardozi work",
    "Dabka work", "Aari work", "Kantha work", "Phulkari work", "Cutwork", "Ribbon work",
    "Tassel work", "Block printing", "Appliqué with mirror work", "Kundan work", "Gota work", "Shell work", "Piping", "Ribbon embroidery", "Kalamkari print", "Batik print"]
    },
    {
    name:"Padding",
    type:"Dropdown",
    required:true,
    options:["Non-Padded","Padded"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options:["Checked","Chikankari","Colorblocked","CrissCross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:true,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Stitch Type",
    type:"Dropdown",
    required:true,
    options:["Semi-Stitched","Stitched","Unstiched"]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:true,
    options: [
        "Assam Silk", "Bagh", "Baluchari", "Banarasi", "Bandhani", "Banglori Silk",
        "Bengali", "Bhagalpuri", "Blouse With Belt", "Bollywood", "Bomkai/Sonepuri",
        "Brasso", "Chanderi", "Chikankari", "Fish Cut", "Gadwal", "Gujarati",
        "Hakoba", "Ikat", "Jaipuri", "Jamdani", "Kantha", "Kanjeevaram",
        "Kasavu", "Khaadi", "Khadi", "Konrad and Mubbhagam", "Kota",
        "Leheriya", "Maheshwari", "Maheshwari Silk", "Manalari", "Mekhala Chador",
        "Mysore Silk", "Narayan Peth", "Nauvari", "Paithani", "Patola",
        "Peplum", "Pochampally", "Poncho", "Rajasthani", "Sambalpuri",
        "Sana Silk", "Stretchable", "Taant", "Tussar", "Two-Tone",
        "Upada", "Upada Paatu", "Venkatgiri"
    ]
    
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Crop Blouse","Regular"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Abstract", "Animal", "Applique", "Aztec", "Bandhani", "Batik", "Block", "Bohemian",
        "Botanical", "Checked", "Chevron", "Colorblocked", "Embellished", "Ethnic Motif",
        "Floral", "Foil", "Geometric", "Graphic", "Herringbone", "Houndstooth", "Ikat",
        "Kalamkari", "Leheriya", "Madhubani", "Micro", "Paisley", "Pattu", "Polka Dot",
        "Quirky", "Ribbon", "Scenic", "Shibori", "Solid", "Stripe", "Tie and Dye", "Tribal",
        "Warli", "Woven Design", "Zari Butta"
    ]
    },
    {
    name:"Sleeve Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Batwing Sleeves", "Bell Sleeves", "Cap Sleeves", "Cape", "Cold Shoulder",
        "Cuffed Sleeves", "Extended Sleeves", "Flared Sleeves", "Flutter Sleeves",
        "Kimono Sleeves", "Off-Shoulder", "One Side Sleeve", "Puff Sleeves", "Raglan Sleeves",
        "Regular Sleeves", "Roll-up Sleeves", "Shoulder Straps", "Sleeveless", "Slit Sleeves",
        "Thumbhole", "Tulip Sleeves"
    ]
    
    },
    {
    name:"Type of Closure",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Button","Front Open","Hook","Slip-on","Tie","Zip"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Blouse Piece":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options:["Acrylic","Art Silk","Bamboo","Chambray","Chanderi Silk", "Chiffon","Cotton",
    "cotton Blend","Cotton Cambric","Cotton Lenin","Cotton Silk","Crepe","Denim","Dupion Silk","Georgette","Jacquard","Jute Cotton","Jute Silk","Khadi Cotton","Kora Muslin","Lace","Leather","Linen","Lyocell","Modal","Mulmul","Net","Nylon","Organza","Paper Silk","Pashmina","Poly Chiffon","Poly Crepe","Poly Georgette","Polysilk","PolyCotton","Polyster","Rayon","RayonSlub","Satin","Scuba","Shantoon","Silk","Silk Blend","Soft Silk","Super Net","TaffetaSilk","Tissue","Tussar Silk","Velvet","Vichitra Silk","Viscose","Viscose Rayon","Voile","Wool"]
    },
    {
    name:"Loom Type",
    type:"Dropdown",
    required:true,
    options:["Handloom","Powerloom"]
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Occassion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Casual","Ethnic Casual","Ethnic Party","Everday","Festive","Formal","Others","Wedding","Western casual","Western Party"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Embroidery", "Zari work", "Sequins", "Beadwork", "Mirror work", "Patchwork",
    "Appliqué", "Stone work", "Gota patti", "Thread work", "Resham work", "Zardozi work",
    "Dabka work", "Aari work", "Kantha work", "Phulkari work", "Cutwork", "Ribbon work",
    "Tassel work", "Block printing", "Appliqué with mirror work", "Kundan work", "Gota work", "Shell work", "Piping", "Ribbon embroidery", "Kalamkari print", "Batik print"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Abstract", "Animal", "Applique", "Aztec", "Bandhani", "Batik", "Block", "Bohemian",
        "Botanical", "Checked", "Chevron", "Colorblocked", "Embellished", "Ethnic Motif",
        "Floral", "Foil", "Geometric", "Graphic", "Herringbone", "Houndstooth", "Ikat",
        "Kalamkari", "Leheriya", "Madhubani", "Micro", "Paisley", "Pattu", "Polka Dot",
        "Quirky", "Ribbon", "Scenic", "Shibori", "Solid", "Stripe", "Tie and Dye", "Tribal",
        "Warli", "Woven Design", "Zari Butta"
    ]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Silk","Bagh","Baluchari","Banarasi","Bandhani","Banglori Silk","Bengali","Bhaglpuri","Blouse With Belt","Bollywwod","Bomkai/Sonepuri","Brasso","Chanderi","Chikankari","Fish Cut","Gadwal","Gujariti","Hakoba","Ikat","Jaipuri","Jamdani","kaantha","Kanjeevaram","Kasavu","Khaan","Khadi","Konrad and Mubbhagam","Kota","Leheriya","Maheshwari","Maheshwari Silk","Manalariri","Mekhala Chador","Mysore Silk","Narayan Peth","Nauvari","Paithani","Patola","Peplum","Pochampally","Poncho","rajasthani","Sa mbahlpuri","Sana Silk","Stretchable","Taant","Tussatr","Two-Tone","Upada","Upada paatu","Venkatgiri"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Suits & Dress Material":{
    "Suits":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net", "Nylon",
        "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette",
        "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub", "Satin", "Scuba",
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", "Tissue",
        "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Loom Type",
    type:"Dropdown",
    required:true,
    options:["Handloom","Powerloom"]
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Occassion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[ "Casual","Ethnic Casual","Ethnic Party","Everday","Festive","Formal","Others","Wedding","Western casual","Western Party"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Embroidery", "Zari work", "Sequins", "Beadwork", "Mirror work",
    "Patchwork", "Appliqué", "Stone work", "Gota patti", "Thread work", "Resham work",
    "Zardozi work", "Dabka work", "Aari work", "Kantha work", "Phulkari work", "Cutwork",
    "Ribbon work", "Tassel work", "Block printing", "Appliqué with mirror work", "Kundan work", "Gota work", "Shell work", "Piping", "Ribbon embroidery", "Kalamkari print",
    "Batik print"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Abstract", "Animal", "Applique", "Aztec", "Bandhani", "Batik", "Block", "Bohemian",
        "Botanical", "Checked", "Chevron", "Colorblocked", "Embellished", "Ethnic Motif",
        "Floral", "Foil", "Geometric", "Graphic", "Herringbone", "Houndstooth", "Ikat",
        "Kalamkari", "Leheriya", "Madhubani", "Micro", "Paisley", "Pattu", "Polka Dot",
        "Quirky", "Ribbon", "Scenic", "Shibori", "Solid", "Stripe", "Tie and Dye", "Tribal",
        "Warli", "Woven Design", "Zari Butta"
    ]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Anarkali Suit","Bajirao","Dhoti Suits","Garara Suits","Gujrati","Jaipuri designs","Jodhpuri","Kashmiri","Kota Doria","Lehenga Suit","lucknowi","Macrame","Pakistani Suits","Plazzo Suits","Pathani","Patiala Suits","Punjabi/All Over Suits","Rajputi","Shara Suits","Shrug Suit","South Cotton","South Cotton Suit","Suits With Phulkari Dupatta"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Semi-Stitched Suits":{
    allOptions:[
    {
    name:"Bottom Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Bottom Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net", "Nylon",
        "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette",
        "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub", "Satin", "Scuba",
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", "Tissue",
        "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Bottom Length",
    type:"Dropdown",
    required:true,
    options:["0-2 meter","2.0-2.25 meter","2.5 meter","2.6 meter","2.7 meter","2.8 meter","2.9 meter","3 meter","No Bottomwear"]
    },
    {
    name:"Dupatta Color",
    type:"Dropdown",
    required:true,
    options:["Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Lining Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net", "Nylon",
        "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette",
        "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub", "Satin", "Scuba",
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", "Tissue",
        "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Occassion",
    type:"Dropdown",
    required:true,
    options:["Casual","Ethnic Casual","Ethnic Party","Everday","Festive","Formal","Others","Wedding","Western casual","Western Party"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:true,
    options:["Embroidery", "Zari work", "Sequins", "Beadwork", "Mirror work",
    "Patchwork", "Appliqué", "Stone work", "Gota patti", "Thread work", "Resham work",
    "Zardozi work", "Dabka work", "Aari work", "Kantha work", "Phulkari work", "Cutwork",
    "Ribbon work", "Tassel work", "Block printing", "Appliqué with mirror work", "Kundan work", "Gota work", "Shell work", "Piping", "Ribbon embroidery", "Kalamkari print",
    "Batik print"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:true,
    options: [
        "Abstract", "Animal", "Applique", "Aztec", "Bandhani", "Batik", "Block", "Bohemian",
        "Botanical", "Checked", "Chevron", "Colorblocked", "Embellished", "Ethnic Motif",
        "Floral", "Foil", "Geometric", "Graphic", "Herringbone", "Houndstooth", "Ikat",
        "Kalamkari", "Leheriya", "Madhubani", "Micro", "Paisley", "Pattu", "Polka Dot",
        "Quirky", "Ribbon", "Scenic", "Shibori", "Solid", "Stripe", "Tie and Dye", "Tribal",
        "Warli", "Woven Design", "Zari Butta"
    ]
    },
    {
    name:"Top Color",
    type:"Dropdown",
    required:true,
    options:["Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Top Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net", "Nylon",
        "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette",
        "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub", "Satin", "Scuba",
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", "Tissue",
        "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Top Length",
    type:"Dropdown",
    required:true,
    options:["0-2 meter","2.0-2.25 meter","2.5 meter","2.6 meter","2.7 meter","2.8 meter","2.9 meter","3 meter"]
    },
    {
    name:"Transparency",
    type:"Dropdown",
    required:true,
    options:["No","Yes"]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:true,
    options:["Anarkali Suit","Bajirao","Dhoti Suits","Garara Suits","Gujrati","Jaipuri designs","Jodhpuri","Kashmiri","Kota Doria","Lehenga Suit","lucknowi","Macrame","Pakistani Suits","Plazzo Suits","Pathani","Patiala Suits","Punjabi/All Over Suits","Rajputi","Shara Suits","Shrug Suit","South Cotton","South Cotton Suit","Suits With Phulkari Dupatta"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
        "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
        "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
        "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Bottom Design",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Ballon/Harem","Churidar","Dhoti","Gharara","No Bottomwear Fabric","Palazoo","Pant","Patiala","Salwar","Skirt","Tulip","Unstitchable Bottom fabric",]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Dupatta Fabric",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk",
        "Chiffon", "Cotton", "Cotton Blend", "Cotton Cambric", "Cotton Linen",
        "Cotton Silk", "Crepe", "Denim", "Dupion Silk", "Georgette", "Jacquard",
        "Jute Cotton", "Jute Silk", "Khadi Cotton", "Kora Muslin", "Lace",
        "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net", "Nylon",
        "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe",
        "Poly Georgette", "Poly Silk", "Poly Cotton", "Polyester", "Rayon",
        "Rayon Slub", "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend",
        "Soft Silk", "Super Net", "Taffeta Silk", "Tissue", "Tussar Silk",
        "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Dupatta Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["0-2 meter","2.0-2.25 meter","2.5 meter","2.6 meter","2.7 meter","2.8 meter","2.9 meter","3 meter"]
    },
    {
    name:"Neck",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Boat Neck", "Built-up Collar", "Button-Down", "Choker", "Cowl Neck", "Halter Neck",
        "Henley", "High Neck", "Hood", "Keyhole Neck", "Mandarin Collar", "Notch", "Off-Shoulder",
        "One Shoulder", "Peter Pan Collar", "Polo Neck", "Round Neck", "Scoop Neck", "Shawl Collar",
        "Shirt Collar", "Shoulder Straps", "Slim Collar", "Spread Collar", "Square Neck", "Strapless",
        "Stylised", "Surplice", "Sweetheart Neck", "Tie-up Neck", "Turtle Neck", "V-Neck"
    ]
    
    
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Top Design",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["A-Line","Anarkali","Angrakha","Frock","High Slit","Pleated","Staright line Top","Unstitched Topwear fabric"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Leggings, Salwars, Churidars":{
    "Churidars":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net", "Nylon",
        "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette",
        "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub", "Satin", "Scuba",
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", "Tissue",
        "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","CrissCross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Patialas":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options:[ "Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "Grey Melange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour",
    "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude"
    ,"Olive","Orange", "Peach","Pink", "Purple", "Red","Rust","Silver", "Teal", "White",
    "Yellow"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net", "Nylon",
        "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette",
        "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub", "Satin", "Scuba",
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", "Tissue",
        "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Dupatta Color",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White",
        "Blue", "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey",
        "Grey Melange", "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour",
        "Maroon", "Metallic", "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude",
        "Olive", "Orange", "Peach", "Pink", "Purple", "Red", "Rust", "Silver", "Teal",
        "White", "Yellow"
    ]
    
    },
    {
    name:"Dupatta Fabric",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net",
        "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe",
        "Poly Georgette", "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net",
        "Taffeta Silk", "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose",
        "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Abstract", "Animal", "Applique", "Aztec", "Bandhani", "Batik", "Block", "Bohemian",
        "Botanical", "Checked", "Chevron", "Colorblocked", "Embellished", "Ethnic Motif",
        "Floral", "Foil", "Geometric", "Graphic", "Herringbone", "Houndstooth", "Ikat",
        "Kalamkari", "Leheriya", "Madhubani", "Micro", "Paisley", "Pattu", "Polka Dot",
        "Quirky", "Ribbon", "Scenic", "Shibori", "Solid", "Stripe", "Tie and Dye", "Tribal",
        "Warli", "Woven Design", "Zari Butta"
    ]
    },
    {
    name:"Stitch Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Semi-Stitched","Stitched","Unstiched"]
    },
    {
    name:"Waist Closure",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Button","Drawstring","Elastic Waistband","Zip"]
    },
    {
    name:"Waist Rise",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["High Rise","Low Rise","Mid Rise"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    "Salwars":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White",
        "Blue", "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey",
        "Grey Melange", "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour",
        "Maroon", "Metallic", "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude",
        "Olive", "Orange", "Peach", "Pink", "Purple", "Red", "Rust", "Silver", "Teal",
        "White", "Yellow"
    ]
    
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net",
        "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe",
        "Poly Georgette", "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net",
        "Taffeta Silk", "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose",
        "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Dupattas & Shawls":{
    Dupattas:{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White",
        "Blue", "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey",
        "Grey Melange", "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour",
        "Maroon", "Metallic", "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude",
        "Olive", "Orange", "Peach", "Pink", "Purple", "Red", "Rust", "Silver", "Teal",
        "White", "Yellow"
    ]
    
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net",
        "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe",
        "Poly Georgette", "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net",
        "Taffeta Silk", "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose",
        "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    
    
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    
    
    
    Shawls:{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White",
        "Blue", "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey",
        "Grey Melange", "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour",
        "Maroon", "Metallic", "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude",
        "Olive", "Orange", "Peach", "Pink", "Purple", "Red", "Rust", "Silver", "Teal",
        "White", "Yellow"
    ]
    
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net",
        "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe",
        "Poly Georgette", "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net",
        "Taffeta Silk", "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose",
        "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Border",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Embellished","Embroidered","Lace","No Border","Printed","Solid","Temple Border","Woven Design","Zari"]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Daily","Festive","Maternity","Office","Party","Wedding"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    
    
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Abstract", "Animal", "Applique", "Aztec", "Bandhani", "Batik", "Block", "Bohemian",
        "Botanical", "Checked", "Chevron", "Colorblocked", "Embellished", "Ethnic Motif",
        "Floral", "Foil", "Geometric", "Graphic", "Herringbone", "Houndstooth", "Ikat",
        "Kalamkari", "Leheriya", "Madhubani", "Micro", "Paisley", "Pattu", "Polka Dot",
        "Quirky", "Ribbon", "Scenic", "Shibori", "Solid", "Stripe", "Tie and Dye", "Tribal",
        "Warli", "Woven Design", "Zari Butta"
    ]
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Applique","Bow","Cut Work","Cut Out","Embellished","Fringed","Lace inserts","Layered","Pintucks","Pleated or Rathered","Pom-Poms","Ruffles","Sequinned","Sheen","Smocking or Shirred","Studded","Tassels","Tie-Ups","Waist Tie-ups","Zardoori","Aari Work"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Ethnic Jackets":{
    "Ethnic Jackets":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White",
        "Blue", "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey",
        "Grey Melange", "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour",
        "Maroon", "Metallic", "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude",
        "Olive", "Orange", "Peach", "Pink", "Purple", "Red", "Rust", "Silver", "Teal",
        "White", "Yellow"
    ]
    
    },
    {
    name:"Combo of",
    type:"Dropdown",
    required:true,
    options:["Combo of 2","Combo of 3","Combo of 4","Combo of 5","Combo of 6","Couple Set","Kurti With Saree","Single"]
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net", "Nylon",
        "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette",
        "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub", "Satin", "Scuba",
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", "Tissue",
        "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Stitch Type",
    type:"Dropdown",
    required:true,
    options:["Semi-Stitched","Stitched","Unstiched"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal",
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Crop","Long","Waist Length"]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Daily","Festive","Maternity","Office","Party","Wedding"]
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Embroidery", "Zari work", "Sequins", "Beadwork", "Mirror work",
    "Patchwork", "Appliqué", "Stone work", "Gota patti", "Thread work", "Resham work",
    "Zardozi work", "Dabka work", "Aari work", "Kantha work", "Phulkari work", "Cutwork",
    "Ribbon work", "Tassel work", "Block printing", "Appliqué with mirror work", "Kundanwork", "Gota work", "Shell work", "Piping", "Ribbon embroidery", "Kalamkari print","Batik print"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    
    
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Gujarti","Indo Western","jacket Lehenga","Jaipuri","Koti","Marwadi","Pattu","Rajputani","South Indian","Western"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Lehenga Choli":{
    Lehenga:{
    allOptions:[
    {
    name:"Bottom Length",
    type:"Dropdown",
    required:true,
    options:["Crop Blouse","Regular"]
    },
    {
    name:"Bottom Style",
    type:"Dropdown",
    required:true,
    options:["Anarkali ","Bajirao","Dhoti ","Garara Suits","Gujarti","Jaipuri designs","Jodhpuri","Kashmiri","Kota Doria","Lehenga","lucknowi","Macrame","Pakistani","Plazzo","Pathani","Patiala","Punjabi/All Over Suits","Rajputi","Shara","ShrugSuit","South Cotton","South Cotto", "With Phulkari Dupatta"]
    },
    {
    name:"Bottowear Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White",
        "Blue", "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey",
        "Grey Melange", "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour",
        "Maroon", "Metallic", "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude",
        "Olive", "Orange", "Peach", "Pink", "Purple", "Red", "Rust", "Silver", "Teal",
        "White", "Yellow"
    ]
    
    },
    {
    name:"Bottomwear Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net", "Nylon",
        "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette",
        "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub", "Satin", "Scuba",
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", "Tissue",
        "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White",
        "Blue", "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey",
        "Grey Melange", "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour",
        "Maroon", "Metallic", "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude",
        "Olive", "Orange", "Peach", "Pink", "Purple", "Red", "Rust", "Silver", "Teal",
        "White", "Yellow"
    ]
    
    },
    {
    name:"Combo of",
    type:"Dropdown",
    required:true,
    options:["Combo of 2","Combo of 3","Combo of 4","Combo of 5","Combo of 6","Couple Set","Kurti With Saree","Single"]
    },
    {
    name:"Dupatta Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White",
        "Blue", "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey",
        "Grey Melange", "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour",
        "Maroon", "Metallic", "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude",
        "Olive", "Orange", "Peach", "Pink", "Purple", "Red", "Rust", "Silver", "Teal",
        "White", "Yellow"
    ]
    
    },
    {
    name:"Dupatta Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net", "Nylon",
        "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette",
        "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub", "Satin", "Scuba",
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", "Tissue",
        "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Ornamentation",
    type:"Dropdown",
    required:true,
    options:["Embroidery", "Zari work", "Sequins", "Beadwork", "Mirror work",
    "Patchwork", "Appliqué", "Stone work", "Gota patti", "Thread work", "Resham work",
    "Zardozi work", "Dabka work", "Aari work", "Kantha work", "Phulkari work", "Cutwork",
    "Ribbon work", "Tassel work", "Block printing", "Appliqué with mirror work", "Kundan work", "Gota work", "Shell work", "Piping", "Ribbon embroidery", "Kalamkari print",
    "Batik print"]
    },
    {
    name:"Set Type",
    type:"Dropdown",
    required:true,
    options:["Choli","Choli And Dupatta","Kurta","Kurta and Dupatta","Lehenga Dhavani"]
    },
    {
    name:"Stitch Type",
    type:"Dropdown",
    required:true,
    options:["Semi-Stitched","Stitched","Unstiched"]
    },
    {
    name:"Topwear Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net", "Nylon",
        "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe", "Poly Georgette",
        "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub", "Satin", "Scuba",
        "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net", "Taffeta Silk", "Tissue",
        "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose", "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Type",
    type:"Dropdown",
    required:true,
    options:["Assam Silk","Bagh","Baluchari","Banarasi","Bandhani","Banglori Silk","Bengali","Bhaglpuri","Blouse With Belt","Bollywwod","Bomkai/Sonepuri","Brasso","Chanderi","Chikankari","Fish Cut","Gadwal","Gujariti","Hakoba","Ikat","Jaipuri","Jamdani","kaantha","Kanjeevaram","Kasavu","Khaan","Khadi","Konrad and Mubbhagam","Kota","Leheriya","Maheshwari","Maheshwari Silk","Manalariri","Mekhala Chador","Mysore Silk","Narayan Peth","Nauvari","Paithani","Patola","Peplum","Pochampally","Poncho","rajasthani","Sa mbahlpuri","Sana Silk","Stretchable","Taant","Tussatr","Two-Tone","Upada","Upada paatu","Venkatgiri"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Blouse Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["short Sleeves","Shoulder Strap","Shleeveless","Three-Quarter Sleeves"]
    },
    {
    name:"Bottom Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Abstract","Animal","Aztec","Bohemian","Botanical","Camouflage","Checked",
    "Chevron","Colorblocked","Conversational","Embellished","Ethnic Motif","Floral","Geometric","Graphic","Horizontal Stripes","houndstooth","Melange","Micro Print","Ombre","Placement Print","Polka Dots","Quirky","Solid","Striped","Tie and Dye","Tribal","Tropical","Typography","Vertical Stripes"]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Brand Check",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["No","Yes"]
    },
    {
    name:"Dupatta Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Abstract","Animal","Aztec","Bohemian","Botanical","Camouflage","Checked",
    "Chevron","Colorblocked","Conversational","Embellished","Ethnic Motif","Floral","Geometric","Graphic","Horizontal Stripes","houndstooth","Melange","Micro Print","Ombre","Placement Print","Polka Dots","Quirky","Solid","Striped","Tie and Dye","Tribal","Tropical","Typography","Vertical Stripes"]
    },
    {
    name:"Top Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Abstract","Animal","Aztec","Bohemian","Botanical","Camouflage","Checked",
    "Chevron","Colorblocked","Conversational","Embellished","Ethnic Motif","Floral","Geometric","Graphic","Horizontal Stripes","houndstooth","Melange","Micro Print","Ombre","Placement Print","Polka Dots","Quirky","Solid","Striped","Tie and Dye","Tribal","Tropical","Typography","Vertical Stripes"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Ethnic Skirts":{
    "Skirts":{
    allOptions:[
    {
    name:"Color",
    type:"Dropdown",
    required:true,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White",
        "Blue", "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey",
        "Grey Melange", "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour",
        "Maroon", "Metallic", "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude",
        "Olive", "Orange", "Peach", "Pink", "Purple", "Red", "Rust", "Silver", "Teal",
        "White", "Yellow"
    ]
    
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net",
        "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe",
        "Poly Georgette", "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net",
        "Taffeta Silk", "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose",
        "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Fit/Shape",
    type:"Dropdown",
    required:true,
    options:["A-Line","Asymmetric","Backless","Bardot","Blouson","Boxy","Bralette","Cami","Cape","Cinched Waist","Compression","Empire","Fish Cut","Flared","High-Slit","High-Low","Kaftan","Loose","Maxi","Oversized","Peplum","Racerback","Regular",
    "Shirt Styles","slim","Spaghetti","Styled Back","Tank","Tube","Tunic","Wrap"]
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    
    
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Inner Fabric",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net",
        "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe",
        "Poly Georgette", "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net",
        "Taffeta Silk", "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose",
        "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Above Knee","Ankle length","calflength","Knee Length"]
    },
    {
    name:"Occasion",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Daily","Festive","Maternity","Office","Party","Wedding"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Abstract", "Animal", "Applique", "Aztec", "Bandhani", "Batik", "Block", "Bohemian",
        "Botanical", "Checked", "Chevron", "Colorblocked", "Embellished", "Ethnic Motif",
        "Floral", "Foil", "Geometric", "Graphic", "Herringbone", "Houndstooth", "Ikat",
        "Kalamkari", "Leheriya", "Madhubani", "Micro", "Paisley", "Pattu", "Polka Dot",
        "Quirky", "Ribbon", "Scenic", "Shibori", "Solid", "Stripe", "Tie and Dye", "Tribal",
        "Warli", "Woven Design", "Zari Butta"
    ]
    },
    {
    name:"Surface Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Applique", "Bow", "Cut Work", "Cut Out", "Embellished", "Fringed", "Lace inserts", 
        "Layered", "Pintucks", "Pleated or Ruffled", "Pom-Poms", "Ruffles", "Sequinned", "Sheen", 
        "Smocking or Shirred", "Studded", "Tassels", "Tie-Ups", "Waist Tie-ups"
    ]
    
    
    
    },
    {
    name:"Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Banarsi","Bandhani","Gujrati","Indo Western","Jacket Lehenga","marwadi","Pattu","Rajputani","South Indian","Western"]
    },
    {
    name:"Waist Closure",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Button","Drawstring","Elastic Waistband","Zip"]
    },
    {
    name:"Waist Rise",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[ "High Rise","Low Rise","Mid Rise"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Islamic wear":{
    "Abayas & Coats":{
    allOptions:[
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Color",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White",
        "Blue", "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey",
        "Grey Melange", "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour",
        "Maroon", "Metallic", "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude",
        "Olive", "Orange", "Peach", "Pink", "Purple", "Red", "Rust", "Silver", "Teal",
        "White", "Yellow"
    ]
    
    },
    {
    name:"Fabric",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net",
        "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe",
        "Poly Georgette", "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net",
        "Taffeta Silk", "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose",
        "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    
    
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Abstract", "Animal", "Applique", "Aztec", "Bandhani", "Batik", "Block", "Bohemian",
        "Botanical", "Checked", "Chevron", "Colorblocked", "Embellished", "Ethnic Motif",
        "Floral", "Foil", "Geometric", "Graphic", "Herringbone", "Houndstooth", "Ikat",
        "Kalamkari", "Leheriya", "Madhubani", "Micro", "Paisley", "Pattu", "Polka Dot",
        "Quirky", "Ribbon", "Scenic", "Shibori", "Solid", "Stripe", "Tie and Dye", "Tribal",
        "Warli", "Woven Design", "Zari Butta"
    ]
    },
    {
    name:"Size",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Free Size"]
    },
    {
    name:"Sleeve Length",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
    },
    {
    name:"Sleeve Styling",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Batwing Sleeves", "Bell Sleeves", "Cap Sleeves", "Cape", "Cold Shoulder",
        "Cuffed Sleeves", "Extended Sleeves", "Flared Sleeves", "Flutter Sleeves",
        "Kimono Sleeves", "Off-Shoulder", "One Side Sleeve", "Puff Sleeves", "Raglan Sleeves",
        "Regular Sleeves", "Roll-up Sleeves", "Shoulder Straps", "Sleeveless", "Slit Sleeves",
        "Thumbhole", "Tulip Sleeves"
    ]
    
    },
    {
    name:"Stitch Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Semi-Stitched","Stitched","Unstiched"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    
    
    
    "Sharara":{
    "Sharara":{
    allOptions:[
    {
    name:"Fabric",
    type:"Dropdown",
    required:true,
    options: [
        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net",
        "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe",
        "Poly Georgette", "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub",
        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net",
        "Taffeta Silk", "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose",
        "Viscose Rayon", "Voile", "Wool"
    ]
    
    },
    {
    name:"Net Quantity(N)",
    type:"Dropdown",
    required:true,
    options:["1","2","3","4","5","6","7","8","9","10"]
    },
    {
    name:"Pattern",
    type:"Dropdown",
    required:true,
    options:["Checked","Chikankari","Colorblocked","Criss Cross","Crochet","Dyed/Washed","Embellished","Embroidered","Hanbok","Lace","Printed","Ribbed","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
    
    
    },
    {
    name:"Country of Origin",
    type:"Dropdown",
    required:true,
    options: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]
    
    },
    {
    name:"Manufacturer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Packer Details",
    type:"Text",
    required:true,
    options:[]
    },
    {
    name:"Brand",
    type:"Dropdown",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Color",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue", "Black and White",
        "Blue", "Brown", "Coral", "Cream", "Dark Multicolor", "Gold", "Green", "Grey",
        "Grey Melange", "Khaki", "Lavender", "Lemon Yellow", "Light Multicolour",
        "Maroon", "Metallic", "Mint Green", "Mustard", "Navy Blue", "Neo Green", "Nude",
        "Olive", "Orange", "Peach", "Pink", "Purple", "Red", "Rust", "Silver", "Teal",
        "White", "Yellow"
    ]
    
    },
    {
    name:"Stitch Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Semi-Stitched","Stitched","Unstiched"]
    },
    {
    name:"Print or Pattern Type",
    type:"Dropdown",
    required:false
    
    
    ,
    options: [
        "Abstract", "Animal", "Applique", "Aztec", "Bandhani", "Batik", "Block", "Bohemian",
        "Botanical", "Checked", "Chevron", "Colorblocked", "Embellished", "Ethnic Motif",
        "Floral", "Foil", "Geometric", "Graphic", "Herringbone", "Houndstooth", "Ikat",
        "Kalamkari", "Leheriya", "Madhubani", "Micro", "Paisley", "Pattu", "Polka Dot",
        "Quirky", "Ribbon", "Scenic", "Shibori", "Solid", "Stripe", "Tie and Dye", "Tribal",
        "Warli", "Woven Design", "Zari Butta"
    ]
    },
    {
    name:"Waist Closure",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["Button","Drawstring","Elastic Waistband","Zip"]
    },
    {
    name:"Waist Rise",
    type:"Dropdown",
    required:false
    
    
    ,
    options:["High Rise","Low Rise","Mid Rise"]
    },
    {
    name:"Description",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    {
    name:"Importer Details",
    type:"Text",
    required:false
    
    
    ,
    options:[]
    },
    ]
    },
    },
    },
    "Sports & Activewear":{
        "Bottoms":{
            "Bottoms":{
                allOptions:[
                    {
                    name:"Color",
                    type:"Dropdown",
                    required:true,
                    options:["Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "GreyMelange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink",
                    "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow" ]
                    },
                    {
                    name:"Fabric",
                    type:"Dropdown",
                    required:true,
                    options : [
                        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
                        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
                        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
                        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net",
                        "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe",
                        "Poly Georgette", "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub",
                        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net",
                        "Taffeta Silk", "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose",
                        "Viscose Rayon", "Voile", "Wool"
                    ]
                    
                    },
                    {
                    name:"Net Quantity(N)",
                    type:"Dropdown",
                    required:true,
                    options:["1","2","3","4","5","6","7","8","9","10"]
                    },
                    {
                    name:"Type",
                    type:"text",
                    required:true,
                    options : []
                    
                    },
                    {
                    name:"Country of Origin",
                    type:"Dropdown",
                    required:true,
                    options : [
                        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
                        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
                        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
                        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
                        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
                        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
                        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
                        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
                        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
                        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
                        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
                        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
                        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
                        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
                        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
                        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
                        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
                        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
                        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
                        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
                        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
                        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
                        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
                        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
                        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
                        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
                        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
                        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
                        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
                        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
                        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
                        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
                        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
                    ]
                    
                    },
                    {
                    name:"Manufacturer Details",
                    type:"Text",
                    required:true,
                    options:[]
                    },
                    {
                    name:"Packer Details",
                    type:"Text",
                    required:true,
                    options:[]
                    },
                    {
                    name:"Pattern",
                    type:"Dropdown",
                    required:false,
                    options:["Colorblocked","Dyed/Washed","Embellished","Embroidered","Lace","Printted","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
                    },
                    {
                        name:"Brand",
                        type:"text",
                        required:false,
                        options:[]
                    },
                    {
                    name:"Description",
                    type:"Text",
                    required:false,
                    options:[]
                    },
                    {
                    name:"Importer Details",
                    type:"Text",
                    required:false,
                    options:[]
                    }
                    ]
            },
        },

        "Innerwear":{
            "Sports Bra":{
                allOptions:[
                    {
                    name:"Color",
                    type:"Dropdown",
                    required:true,
                    options:["Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "GreyMelange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink",
                    "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow" ]
                    },
                    {
                    name:"Fabric",
                    type:"Dropdown",
                    required:true,
                    options : [
                        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
                        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
                        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
                        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net",
                        "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe",
                        "Poly Georgette", "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub",
                        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net",
                        "Taffeta Silk", "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose",
                        "Viscose Rayon", "Voile", "Wool"
                    ]
                    
                    },
                    {
                    name:"Net Quantity(N)",
                    type:"Dropdown",
                    required:true,
                    options:["1","2","3","4","5","6","7","8","9","10"]
                    },
                    {
                        name:"Occasion",
                        type:"Dropdown",
                        required:true,
                        options:["Everyday","Fancy"]
                    },
                    {
                        name:"Type",
                        type:"text",
                        required:true,
                        options:[]
                    },
                    {
                    name:"Country of Origin",
                    type:"Dropdown",
                    required:true,
                    options : [
                        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
                        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
                        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
                        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
                        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
                        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
                        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
                        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
                        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
                        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
                        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
                        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
                        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
                        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
                        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
                        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
                        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
                        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
                        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
                        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
                        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
                        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
                        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
                        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
                        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
                        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
                        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
                        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
                        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
                        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
                        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
                        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
                        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
                    ]
                    
                    },
                    {
                    name:"Manufacturer Details",
                    type:"Text",
                    required:true,
                    options:[]
                    },
                    {
                    name:"Packer Details",
                    type:"Text",
                    required:true,
                    options:[]
                    },
                    {
                    name:"Pattern",
                    type:"Dropdown",
                    required:false,
                    options:["Colorblocked","Dyed/Washed","Embellished","Embroidered","Lace","Printted","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
                    },
                    {
                        name:"Add On",
                        type:"Dropdown",
                        required:false,
                        options:["Hooks","Pads","Straps"]
                    },
                    {
                        name:"Brand",
                        type:"text",
                        required:false,
                        options:[]
                    },
                    {
                        name:"Closure",
                        type:"Dropdown",
                        required:false,
                        options:["Back","Front","Side","Slip-On","Tie-Up","Zipper"]
                    },
                    {
                        name:"Coverage",
                        type:"Dropdown",
                        required:false,
                        options:["Full","Half","Three Quarter"]
                    },
                    {
                        name:"Padding",
                        type:"Dropdown",
                        required:false,
                        options:["Padded","Non Padded"]
                    },
                    {
                        name:"Seam Style",
                        type:"Dropdown",
                        required:false,
                        options:["Seamed"]
                    },
                    {
                        name:"Straps",
                        type:"Dropdown",
                        required:false,
                        options:["Multiway","Removable","Regular","Strapless","Transparent"]
                    },
                    {
                        name:"Surface Styling",
                        type:"Dropdown",
                        required:false,
                        options:["Applique","Bow","Cut Work","Cut Out","Embellished","Fringed","Lace inserts","Layered","Pintucks","Pleated orRathered","Pom-Poms","Ruffles","Sequinned","Sheen","Smocking or Shirred","Studded","Tassels","Tie-Ups","Waist Tie-ups"]
                    },
                    {
                    name:"Description",
                    type:"Text",
                    required:false,
                    options:[]
                    },
                    {
                    name:"Importer Details",
                    type:"Text",
                    required:false,
                    options:[]
                    }
                    ]
            },
            "Active Jackets & Sweatshirts":{
                allOptions:[
                    {
                    name:"Color",
                    type:"Dropdown",
                    required:true,
                    options:["Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "GreyMelange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink",
                    "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow" ]
                    },
                    {
                    name:"Fabric",
                    type:"Dropdown",
                    required:true,
                    options : [
                        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
                        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
                        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
                        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net",
                        "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe",
                        "Poly Georgette", "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub",
                        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net",
                        "Taffeta Silk", "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose",
                        "Viscose Rayon", "Voile", "Wool"
                    ]
                    
                    },
                    {
                    name:"Net Quantity(N)",
                    type:"Dropdown",
                    required:true,
                    options:["1","2","3","4","5","6","7","8","9","10"]
                    },
                    {
                        name:"Type",
                        type:"text",
                        required:true,
                        options:[]
                    },
                    {
                    name:"Country of Origin",
                    type:"Dropdown",
                    required:true,
                    options : [
                        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
                        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
                        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
                        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
                        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
                        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
                        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
                        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
                        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
                        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
                        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
                        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
                        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
                        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
                        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
                        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
                        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
                        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
                        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
                        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
                        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
                        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
                        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
                        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
                        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
                        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
                        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
                        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
                        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
                        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
                        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
                        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
                        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
                    ]
                    
                    },
                    {
                    name:"Manufacturer Details",
                    type:"Text",
                    required:true,
                    options:[]
                    },
                    {
                    name:"Packer Details",
                    type:"Text",
                    required:true,
                    options:[]
                    },
                    {
                    name:"Pattern",
                    type:"Dropdown",
                    required:false,
                    options:["Colorblocked","Dyed/Washed","Embellished","Embroidered","Lace","Printted","Self-Design","Solid","Striped","Woven Design","Zari Woven"]
                    },
                    {
                        name:"Brand",
                        type:"text",
                        required:false,
                        options:[]
                    },
                    {
                        name:"Neck Collar",
                        type:"Dropdown",
                        required:false,
                        options : [
                            "Boat Neck", "Built-up Collar", "Button-Down", "Choker", "Cowl Neck", "Halter Neck", 
                            "Henly", "High", "Hood", "Keyhole Neck", "Mandarin Collar", "Notch", "Off-Shoulder", 
                            "One Shoulder", "Peter Pan Collar", "Polo Neck", "Round Neck", "Scoop Neck", 
                            "Shawl Collar", "Shirt Collar", "Shoulder Straps", "Slim Collar", "Spread Collar", 
                            "Square Neck", "Strapless", "Stylised", "Surplice", "Sweetheart Neck", "Tie-up Neck", 
                            "Turtle Neck", "V-Neck"]
                    },
                    {
                        name:"Print or Pattern",
                        type:"Dropdown",
                        required:false,
                        options : [
                            "Abstract", "Animal", "Aztec", "Bohemian", "Botanical", "Camouflage", "Checked", 
                            "Chevron", "Colorblocked", "Conversational", "Embellished", "Ethnic Motif", 
                            "Floral", "Geometric", "Graphic", "Horizontal Stripes", "houndstooth", "Melange", 
                            "Micro Print", "Ombre", "Placement Print", "Polka Dots", "Quirky", "Solid", "Striped", 
                            "Tie and Dye", "Tribal", "Tropical", "Typography", "Vertical Stripes"]
                    },
                    {
                        name:"Sleeve Length",
                        type:"Dropdown",
                        required:false,
                        options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
                    },
                    {
                    name:"Description",
                    type:"Text",
                    required:false,
                    options:[]
                    },
                    {
                    name:"Importer Details",
                    type:"Text",
                    required:false,
                    options:[]
                    }
                    ]
            }
        },
        
        "Tops":{
            "Tops":{
                allOptions:[
                    {
                    name:"Color",
                    type:"Dropdown",
                    required:true,
                    options:["Pink", "Aqua Blue","Assorted","Beige", "Black","Blue","Black and White","Blue","Brown","Coral","Cream","Dark Multicolor","Gold","Green","Grey", "GreyMelange", "Khaki", "Lavendar", "Lemon YelLow","Light Multicolour", "Maroon","Metallic", "Mint Green", "Mustard", "Navy Blue","Neo Green", "Nude" ,"Olive","Orange", "Peach","Pink",
                    "Purple", "Red","Rust","Silver", "Teal", "White", "Yellow" ]
                    },
                    {
                    name:"Fabric",
                    type:"Dropdown",
                    required:true,
                    options : [
                        "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
                        "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
                        "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
                        "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net",
                        "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe",
                        "Poly Georgette", "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub",
                        "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net",
                        "Taffeta Silk", "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose",
                        "Viscose Rayon", "Voile", "Wool"
                    ]
                    
                    },
                    {
                    name:"Net Quantity(N)",
                    type:"Dropdown",
                    required:true,
                    options:["1","2","3","4","5","6","7","8","9","10"]
                    },
                    {
                        name:"Type",
                        type:"text",
                        required:true,
                        options:[]
                    },
                    {
                    name:"Country of Origin",
                    type:"Dropdown",
                    required:true,
                    options : [
                        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
                        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
                        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
                        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
                        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
                        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
                        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
                        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
                        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
                        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
                        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
                        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
                        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
                        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
                        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
                        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
                        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
                        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
                        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
                        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
                        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
                        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
                        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
                        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
                        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
                        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
                        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
                        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
                        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
                        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
                        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
                        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
                        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
                    ]
                    
                    },
                    {
                    name:"Manufacturer Details",
                    type:"Text",
                    required:true,
                    options:[]
                    },
                    {
                    name:"Packer Details",
                    type:"Text",
                    required:true,
                    options:[]
                    },
                    {
                        name:"Brand",
                        type:"text",
                        required:false,
                        options:[]
                    },
                    {
                        name:"Pattern",
                        type:"Dropdown",
                        required:false,
                        options : [
                            "Abstract", "Animal", "Aztec", "Bohemian", "Botanical", "Camouflage", "Checked", 
                            "Chevron", "Colorblocked", "Conversational", "Embellished", "Ethnic Motif", 
                            "Floral", "Geometric", "Graphic", "Horizontal Stripes", "houndstooth", "Melange", 
                            "Micro Print", "Ombre", "Placement Print", "Polka Dots", "Quirky", "Solid", "Striped", 
                            "Tie and Dye", "Tribal", "Tropical", "Typography", "Vertical Stripes"]
                    },
                    {
                        name:"Sleeve Length",
                        type:"Dropdown",
                        required:false,
                        options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
                    },
                    {
                    name:"Description",
                    type:"Text",
                    required:false,
                    options:[]
                    },
                    {
                    name:"Importer Details",
                    type:"Text",
                    required:false,
                    options:[]
                    }
                    ]
            },
        },
        
        "Active Clothing Set":{
            "Active Clothing Set":{
                allOptions:[
                    {
                    name:"Net Quantity(N)",
                    type:"Dropdown",
                    required:true,
                    options:["1","2","3","4","5","6","7","8","9","10"]
                    },
                    {
                        name:"Top Type",
                        type:"text",
                        required:true,
                        options:[]
                    },
                    {
                    name:"Country of Origin",
                    type:"Dropdown",
                    required:true,
                    options : [
                        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
                        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", 
                        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
                        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
                        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", 
                        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
                        "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", 
                        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
                        "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
                        "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", 
                        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
                        "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", 
                        "Greece", "Grenada", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
                        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
                        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
                        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", 
                        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
                        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
                        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
                        "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", 
                        "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
                        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
                        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
                        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
                        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
                        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
                        "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
                        "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", 
                        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
                        "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
                        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
                        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
                        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
                    ]
                    
                    },
                    {
                    name:"Manufacturer Details",
                    type:"Text",
                    required:true,
                    options:[]
                    },
                    {
                    name:"Packer Details",
                    type:"Text",
                    required:true,
                    options:[]
                    },
                    {
                        name:"Add On",
                        type:"Dropdown",
                        required:false,
                        options:["Jacket","Scarf","Shrugs"]
                    },
                    {
                        name:"Bottom Color",
                        type:"Dropdown",
                        required:false,
                        options: [
                            "White", "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue",
                            "Black and White", "Blue", "Brown", "Coral", "Cream", "Dark Multicolor",
                            "Gold", "Green", "Grey", "Grey Melange", "Khaki", "Lavender",
                            "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic", "Mint Green",
                            "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
                            "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
                        ]
                    },
                    {
                        name:"Bottom Fabric",
                        type:"Dropdown",
                        required:false,
                        options : [
                            "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
                            "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
                            "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
                            "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net",
                            "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe",
                            "Poly Georgette", "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub",
                            "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net",
                            "Taffeta Silk", "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose",
                            "Viscose Rayon", "Voile", "Wool"
                        ]
                        
                    },
                    {
                        name:"Bottom Type",
                        type:"text",
                        required:false,
                        options:[]
                    },
                    {
                        name:"Brand",
                        type:"text",
                        required:false,
                        options:[]
                    },
                    {
                        name:"Bottom Pattern",
                        type:"Dropdown",
                        required:false,
                        options : [
                            "Abstract", "Animal", "Aztec", "Bohemian", "Botanical", "Camouflage", "Checked", 
                            "Chevron", "Colorblocked", "Conversational", "Embellished", "Ethnic Motif", 
                            "Floral", "Geometric", "Graphic", "Horizontal Stripes", "houndstooth", "Melange", 
                            "Micro Print", "Ombre", "Placement Print", "Polka Dots", "Quirky", "Solid", "Striped", 
                            "Tie and Dye", "Tribal", "Tropical", "Typography", "Vertical Stripes"]
                    },
                    {
                        name:"Neck",
                        type:"Dropdown",
                        required:false,
                        options:["High Neck","Hood","Lapel Collar","Mandarin Collar","Off-Shoulder","Peter PanCollar","Round Neck","Shirt Collar","Shoulder Straps","Square Neck","Stylished","V Neck"]
                    },
                    {
                        name:"Sleeve Length",
                        type:"Dropdown",
                        required:false,
                        options:["Long Sleeves","Short Sleeves","Sleevess","Three-Quatar Sleeves"]
                    },
                    {
                        name:"Top Color",
                        type:"Dropdown",
                        required:false,
                        options: [
                            "White", "Pink", "Aqua Blue", "Assorted", "Beige", "Black", "Blue",
                            "Black and White", "Blue", "Brown", "Coral", "Cream", "Dark Multicolor",
                            "Gold", "Green", "Grey", "Grey Melange", "Khaki", "Lavender",
                            "Lemon Yellow", "Light Multicolour", "Maroon", "Metallic", "Mint Green",
                            "Mustard", "Navy Blue", "Neo Green", "Nude", "Olive", "Orange", "Peach",
                            "Pink", "Purple", "Red", "Rust", "Silver", "Teal", "White", "Yellow"
                        ]
                    },
                    {
                        name:"Top Fabric",
                        type:"Dropdown",
                        required:false,
                        options : [
                            "Acrylic", "Art Silk", "Bamboo", "Chambray", "Chanderi Silk", "Chiffon", "Cotton",
                            "Cotton Blend", "Cotton Cambric", "Cotton Lenin", "Cotton Silk", "Crepe", "Denim",
                            "Dupion Silk", "Georgette", "Jacquard", "Jute Cotton", "Jute Silk", "Khadi Cotton",
                            "Kora Muslin", "Lace", "Leather", "Linen", "Lyocell", "Modal", "Mulmul", "Net",
                            "Nylon", "Organza", "Paper Silk", "Pashmina", "Poly Chiffon", "Poly Crepe",
                            "Poly Georgette", "Poly Silk", "Poly Cotton", "Polyester", "Rayon", "Rayon Slub",
                            "Satin", "Scuba", "Shantoon", "Silk", "Silk Blend", "Soft Silk", "Super Net",
                            "Taffeta Silk", "Tissue", "Tussar Silk", "Velvet", "Vichitra Silk", "Viscose",
                            "Viscose Rayon", "Voile", "Wool"
                        ]
                        
                    },
                    {
                        name:"Type",
                        type:"text",
                        required:false,
                        options:[]
                    },
                    {
                        name:"Top Pattern",
                        type:"Dropdown",
                        required:false,
                        options : [
                            "Abstract", "Animal", "Aztec", "Bohemian", "Botanical", "Camouflage", "Checked", 
                            "Chevron", "Colorblocked", "Conversational", "Embellished", "Ethnic Motif", 
                            "Floral", "Geometric", "Graphic", "Horizontal Stripes", "houndstooth", "Melange", 
                            "Micro Print", "Ombre", "Placement Print", "Polka Dots", "Quirky", "Solid", "Striped", 
                            "Tie and Dye", "Tribal", "Tropical", "Typography", "Vertical Stripes"]
                    },
                    {
                    name:"Description",
                    type:"Text",
                    required:false,
                    options:[]
                    },
                    {
                    name:"Importer Details",
                    type:"Text",
                    required:false,
                    options:[]
                    }
                    ]
            }
        },
    },
    }
    
    
}