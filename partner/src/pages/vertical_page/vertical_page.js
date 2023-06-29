import React, { useEffect, useRef, useState } from "react";
import AddProgress from "../../components/addProgress/addProgress";
import VImage from "../../components/vImage/vImage";
import { uploadMultipleFilesToS3 } from "../../store/action/upload_file_action";
import "./vertical_page.css";
import { v4 as uuidv4 } from 'uuid';
import { saveListingRequest } from "../../store/action/listingaction";
import { S3_URI } from "../../store/action/type";

const searchArray = ['MENS WEAR / Western Wear / Top Wear /  T - shirts', 'MENS WEAR / Western Wear / Top Wear / Shirts', 'MENS WEAR / Western Wear / Top Wear / Blazers', 'MENS WEAR / Western Wear / Top Wear / Jackets', 'MENS WEAR / Western Wear / Top Wear / Sweaters', 'MENS WEAR / Western Wear / Top Wear / Sweatshirt', 'MENS WEAR / Western Wear / Top Wear / Shrugs', 'MENS WEAR / Western Wear / Top Wear / Personalised T - shirts', 'MENS WEAR / Western Wear / Top Wear / Active T - shirts', 'MENS WEAR / Western Wear / Bottom Wear / Jeans', 'MENS WEAR / Western Wear / Bottom Wear / Shorts', 'MENS WEAR / Western Wear / Bottom Wear / Track Pants', 'MENS WEAR / Western Wear / Bottom Wear / Trouser', 'MENS WEAR / Western Wear / Bottom Wear / Three - Fourths', 'MENS WEAR / Western Wear / Bottom Wear / Swimming shorts', 'MENS WEAR / Footwear / Shoes / Casual Shoes', 'MENS WEAR / Footwear / Shoes / Formal Shoes', 'MENS WEAR / Footwear / Shoes / Sports Shoes', 'MENS WEAR / Footwear / Shoes / Loafers', 'MENS WEAR / Footwear / Shoes / Floaters', 'MENS WEAR / Footwear / Shoes / Boots', 'MENS WEAR / Footwear / Shoes / Sneakers', 'MENS WEAR / Footwear / Shoes / Safety Shoes', 'MENS WEAR / Footwear / Flipflops and Slippers / Flip Flops', 'MENS WEAR / Footwear / Flipflops and Slippers / Sliders', 'MENS WEAR / Footwear / Flipflops and Slippers / Clogs', 'MENS WEAR / Footwear / Sandals and Floaters / Sandals', 'MENS WEAR / Footwear / Sandals and Floaters / Floaters', 'MENS WEAR / Footwear / Ethnic Footwear / Other Ethnic Flats', 'MENS WEAR / Footwear / Ethnic Footwear / Mojaris and Juttis', 'MENS WEAR / Footwear / Shoe Accessories / Shoe Accessories', 'MENS WEAR / Sports & Activewear / Bottoms / Active Shorts', 'MENS WEAR / Sports & Activewear / Innerwear / Gym Vests', 'MENS WEAR / Men Top Wear / Unstitched Material / Shirt Fabric', 'MENS WEAR / Men Top Wear / Unstitched Material / Top & Bottom Fabric', 'MENS WEAR / Men Top Wear / Brother & Sister T - Shirts / Brother & Sister T - Shirts', 'MENS WEAR / Men Top Wear / Jumpsuits / Jumpsuits', 'MENS WEAR / Men Top Wear / Plus Size T - shirt / Plus Size T - shirt', 'MENS WEAR / Men Top Wear / Raincoat / Raincoat', 'MENS WEAR / Men Bottom Wear / Unstitched Material / Pant Fabric', 'MENS WEAR / Men Bottom Wear / Dungarees / Dungarees', 'MENS WEAR / Ethnic Wear / Dhoti,Mundus & Lungis / Dhoti,Mundus & Lungis', 'MENS WEAR / Ethnic Wear / Ethnic Jackets / Ethnic Jackets', 'MENS WEAR / Ethnic Wear / Kurtas & Kurta Sets / Kurta Sets', 'MENS WEAR / Ethnic Wear / Kurtas & Kurta Sets / Kurtas', 'MENS WEAR / Ethnic Wear / Sherwanis / Sherwanis','WOMENS WEAR / Ethnic Wear / Kurtis, Sets & Fabrics / Kurta Sets', 'WOMENS WEAR / Ethnic Wear / Kurtis, Sets & Fabrics / Kurtis', 'WOMENS WEAR / Ethnic Wear / Kurtis, Sets & Fabrics / Kurti Fabrics', 'WOMENS WEAR / Ethnic Wear / Kurtis, Sets & Fabrics / Dupatta Sets', 'WOMENS WEAR / Ethnic Wear / Sarees, Blouses & Petticoats / Sarees', 'WOMENS WEAR / Ethnic Wear / Sarees, Blouses & Petticoats / Saree Shapewear & Petticoats', 'WOMENS WEAR / Ethnic Wear / Sarees, Blouses & Petticoats / Blouses', 'WOMENS WEAR / Ethnic Wear / Sarees, Blouses & Petticoats / Blouse Piece', 'WOMENS WEAR / Ethnic Wear / Suits & Dress Material / Suits', 'WOMENS WEAR / Ethnic Wear / Suits & Dress Material / Semi-Stitched Suits', 'WOMENS WEAR / Ethnic Wear / Leggings, Salwars, Churidars / Churidars', 'WOMENS WEAR / Ethnic Wear / Leggings, Salwars, Churidars / Patialas', 'WOMENS WEAR / Ethnic Wear / Leggings, Salwars, Churidars / Salwars', 'WOMENS WEAR / Ethnic Wear / Dupattas & Shawls / Dupattas', 'WOMENS WEAR / Ethnic Wear / Dupattas & Shawls / Shawls', 'WOMENS WEAR / Ethnic Wear / Ethnic Jackets / Ethnic Jackets', 'WOMENS WEAR / Ethnic Wear / Lehenga Choli / Lehenga', 'WOMENS WEAR / Ethnic Wear / Ethnic Skirts / Skirts', 'WOMENS WEAR / Ethnic Wear / Islamic wear / Abayas & Coats', 'WOMENS WEAR / Ethnic Wear / Sharara / Sharara', 'WOMENS WEAR / Western Wear / Tops, Tshirts & Shirts / Shirts', 'WOMENS WEAR / Western Wear / Tops, Tshirts & Shirts / Tshirts', 'WOMENS WEAR / Western Wear / Tops, Tshirts & Shirts / Top & Bottom Sets', 'WOMENS WEAR / Western Wear / Tops, Tshirts & Shirts / Tops & Tunics', 'WOMENS WEAR / Western Wear / Tops, Tshirts & Shirts / Women Formal Shirt & Bottom Fabric', 'WOMENS WEAR / Western Wear / Dresses, Gowns & Jumpsuits / Dresses', 'WOMENS WEAR / Western Wear / Dresses, Gowns & Jumpsuits / Gowns', 'WOMENS WEAR / Western Wear / Dresses, Gowns & Jumpsuits / Jumpsuits', 'WOMENS WEAR / Western Wear / Jeans & Jeggings / Jeans', 'WOMENS WEAR / Western Wear / Jeans & Jeggings / Jeggings', 'WOMENS WEAR / Western Wear / Capes, Shrugs & Ponchos / Capes, Shrugs & Ponchos', 'WOMENS WEAR / Western Wear / Capris & Trousers & Pants / Capris', 'WOMENS WEAR / Western Wear / Capris & Trousers & Pants / Trousers & Pants', 'WOMENS WEAR / Western Wear / Sweaters & Cardigans / Cardigans', 'WOMENS WEAR / Western Wear / Sweaters & Cardigans / Sweaters', 'WOMENS WEAR / Western Wear / Jackets / Coats & Jackets', 'WOMENS WEAR / Western Wear / Jackets / Jackets', 'WOMENS WEAR / Western Wear / Jackets / Blazers & Coats', 'WOMENS WEAR / Western Wear / Maternity Wear / Dresses', 'WOMENS WEAR / Western Wear / Palazzos, Leggings & Tights / Leggings', 'WOMENS WEAR / Western Wear / Palazzos, Leggings & Tights / Palazzos', 'WOMENS WEAR / Western Wear / Skirts & Shorts / Skirts', 'WOMENS WEAR / Western Wear / Skirts & Shorts / Shorts', 'WOMENS WEAR / Western Wear / Hoodies & Sweatshirts / Sweatshirts', 'WOMENS WEAR / Western Wear / Tops Tshirts & Shirts / Top & Bottom Sets', 'WOMENS WEAR / Footwear / Flats / Flats', 'WOMENS WEAR / Footwear / Boots / Boots', 'WOMENS WEAR / Footwear / Heels / Heels', 'WOMENS WEAR / Footwear / Flipflops & Slippers / Flipflops & Slippers', 'WOMENS WEAR / Footwear / Flipflops & Slippers / Sliders', 'WOMENS WEAR / Footwear / Flipflops & Slippers / Clogs', 'WOMENS WEAR / Footwear / Shoes / Formal Shoes', 'WOMENS WEAR / Footwear / Shoes / Casual Shoes', 'WOMENS WEAR / Footwear / Shoes / Sports Shoes', 'WOMENS WEAR / Footwear / Shoes / Sneakers', 'WOMENS WEAR / Footwear / Shoes / Loafers & Moccassins', 'WOMENS WEAR / Footwear / Sandals / Sandals', 'WOMENS WEAR / Footwear / Sandals / Floaters', 'WOMENS WEAR / Footwear / Bellies & Juttis / Bellies', 'WOMENS WEAR / Footwear / Bellies & Juttis / Juttis & Mojaris', 'WOMENS WEAR / Maternity / Feeding Topwear / Feeding Kurtis & Kurta Sets', 'WOMENS WEAR / Maternity / Maternity Topwear / Maternity Kurtis & Kurta Sets', 'WOMENS WEAR / Inner & Sleepwear / Swimwear / Swimwear', 'WOMENS WEAR / Inner & Sleepwear / Nightsuits & Nightdresses / Babydolls', 'WOMENS WEAR / Inner & Sleepwear / Nightsuits & Nightdresses / Nightdress', 'WOMENS WEAR / Inner & Sleepwear / Nightsuits & Nightdresses / Nightsuits', 'WOMENS WEAR / Inner & Sleepwear / Nightsuits & Nightdresses / Pyjamas', 'WOMENS WEAR / Inner & Sleepwear / Bras & Lingerie Sets / Bra', 'WOMENS WEAR / Inner & Sleepwear / Bras & Lingerie Sets / Lingerie Sets', 'WOMENS WEAR / Inner & Sleepwear / Bras & Lingerie Sets / Lingerie Accessories', 'WOMENS WEAR / Inner & Sleepwear / Briefs / Briefs', 'WOMENS WEAR / Inner & Sleepwear / Shapewear / Shapewear', 'WOMENS WEAR / Inner & Sleepwear / Period Panty / Period Panty']

const allVerticals = {
            "MENS WEAR": [
                {
                    "Western Wear": [
                        {
                            "Top Wear": [
                                " T - shirts",
                                "Shirts",
                                "Blazers",
                                "Jackets",
                                "Sweaters",
                                "Sweatshirt",
                                "Shrugs",
                                "Personalised T - shirts",
                                "Active T - shirts"
                            ]
                        },
                        {
                            "Bottom Wear": [
                                "Jeans",
                                "Shorts",
                                "Track Pants",
                                "Trouser",
                                "Three - Fourths",
                                "Swimming shorts"
                            ]
                        }
                    ]
                },
                {
                    "Footwear": [
                        {
                            "Shoes": [
                                "Casual Shoes",
                                "Formal Shoes",
                                "Sports Shoes",
                                "Loafers",
                                "Floaters",
                                "Boots",
                                "Sneakers",
                                "Safety Shoes"
                            ]
                        },
                        {
                            "Flipflops and Slippers": [
                                "Flip Flops",
                                "Sliders",
                                "Clogs"
                            ]
                        },
                        {
                            "Sandals and Floaters": [
                                "Sandals",
                                "Floaters"
                            ]
                        },
                        {
                            "Ethnic Footwear": [
                                "Other Ethnic Flats",
                                "Mojaris and Juttis"
                            ]
                        },
                        {
                            "Shoe Accessories": [
                                "Shoe Accessories"
                            ]
                        }
                    ]
                },
                {
                    "Sports & Activewear": [
                        {
                            "Bottoms": [
                                "Active Shorts"
                            ]
                        },
                        {
                            "Innerwear": [
                                "Gym Vests"
                            ]
                        }
                    ]
                },
                {
                    "Men Top Wear": [
                        {
                            "Unstitched Material": [
                                "Shirt Fabric",
                                "Top & Bottom Fabric"
                            ]
                        },
                        {
                            "Brother & Sister T - Shirts": [
                                "Brother & Sister T - Shirts"
                            ]
                        },
                        {
                            "Jumpsuits": [
                                "Jumpsuits"
                            ]
                        },
                        {
                            "Plus Size T - shirt": [
                                "Plus Size T - shirt"
                            ]
                        },
                        {
                            "Raincoat": [
                                "Raincoat"
                            ]
                        }
                    ]
                },
                {
                    "Men Bottom Wear": [
                        {
                            "Unstitched Material": [
                                "Pant Fabric"
                            ]
                        },
                        {
                            "Dungarees": [
                                "Dungarees"
                            ]
                        }
                    ]
                },
                {
                    "Ethnic Wear": [
                        {
                            "Dhoti,Mundus & Lungis": [
                                "Dhoti,Mundus & Lungis"
                            ]
                        },
                        {
                            "Ethnic Jackets": [
                                "Ethnic Jackets"
                            ]
                        },
                        {
                            "Kurtas & Kurta Sets": [
                                "Kurta Sets",
                                "Kurtas"
                            ]
                        },
                        {
                            "Sherwanis": [
                                "Sherwanis"
                            ]
                        }
                    ]
                }
            ],

    "WOMENS WEAR": [
        {
            "Ethnic Wear": [
                {
                    "Kurtis, Sets & Fabrics": [
                        "Kurta Sets",
                        "Kurtis",
                        "Kurti Fabrics",
                        "Dupatta Sets"
                    ]
                },
                {
                    "Sarees, Blouses & Petticoats": [
                        "Sarees",
                        "Saree Shapewear & Petticoats",
                        "Blouses",
                        "Blouse Piece"
                    ]
                },
                {
                    "Suits & Dress Material": [
                        "Suits",
                        "Semi-Stitched Suits"
                    ]
                },
                {
                    "Leggings, Salwars, Churidars": [
                        "Churidars",
                        "Patialas",
                        "Salwars"
                    ]
                },
                {
                    "Dupattas & Shawls": [
                        "Dupattas",
                        "Shawls"
                    ]
                },
                {
                    "Ethnic Jackets": [
                        "Ethnic Jackets"
                    ]
                },
                {
                    "Lehenga Choli": [
                        "Lehenga"
                    ]
                },
                {
                    "Ethnic Skirts": [
                        "Skirts"
                    ]
                },
                {
                    "Islamic wear": [
                        "Abayas & Coats"
                    ]
                },
                {
                    "Sharara": [
                        "Sharara"
                    ]
                }
            ]
        },
        {
            "Western Wear": [
                {
                    "Tops, Tshirts & Shirts": [
                        "Shirts",
                        "Tshirts",
                        "Top & Bottom Sets",
                        "Tops & Tunics",
                        "Women Formal Shirt & Bottom Fabric"
                    ]
                },
                {
                    "Dresses, Gowns & Jumpsuits": [
                        "Dresses",
                        "Gowns",
                        "Jumpsuits"
                    ]
                },
                {
                    "Jeans & Jeggings": [
                        "Jeans",
                        "Jeggings"
                    ]
                },
                {
                    "Capes, Shrugs & Ponchos": [
                        "Capes, Shrugs & Ponchos"
                    ]
                },
                {
                    "Capris & Trousers & Pants": [
                        "Capris",
                        "Trousers & Pants"
                    ]
                },
                {
                    "Sweaters & Cardigans": [
                        "Cardigans",
                        "Sweaters"
                    ]
                },
                {
                    "Jackets": [
                        "Coats & Jackets",
                        "Jackets",
                        "Blazers & Coats"
                    ]
                },
                {
                    "Maternity Wear": [
                        "Dresses"
                    ]
                },
                {
                    "Palazzos, Leggings & Tights": [
                        "Leggings",
                        "Palazzos"
                    ]
                },
                {
                    "Skirts & Shorts": [
                        "Skirts",
                        "Shorts"
                    ]
                },
                {
                    "Hoodies & Sweatshirts": [
                        "Sweatshirts"
                    ]
                },
                {
                    "Tops Tshirts & Shirts": [
                        "Top & Bottom Sets"
                    ]
                }
            ]
        },
        {
            "Footwear": [
                {
                    "Flats": [
                        "Flats"
                    ]
                },
                {
                    "Boots": [
                        "Boots"
                    ]
                },
                {
                    "Heels": [
                        "Heels"
                    ]
                },
                {
                    "Flipflops & Slippers": [
                        "Flipflops & Slippers",
                        "Sliders",
                        "Clogs"
                    ]
                },
                {
                    "Shoes": [
                        "Formal Shoes",
                        "Casual Shoes",
                        "Sports Shoes",
                        "Sneakers",
                        "Loafers & Moccassins"
                    ]
                },
                {
                    "Sandals": [
                        "Sandals",
                        "Floaters"
                    ]
                },
                {
                    "Bellies & Juttis": [
                        "Bellies",
                        "Juttis & Mojaris"
                    ]
                }
            ]
        },
        {
            "Maternity": [
                {
                    "Feeding Topwear": [
                        "Feeding Kurtis & Kurta Sets"
                    ]
                },
                {
                    "Maternity Topwear": [
                        "Maternity Kurtis & Kurta Sets"
                    ]
                }
            ]
        },
        {
            "Inner & Sleepwear": [
                {
                    "Swimwear": [
                        "Swimwear"
                    ]
                },
                {
                    "Nightsuits & Nightdresses": [
                        "Babydolls",
                        "Nightdress",
                        "Nightsuits",
                        "Pyjamas"
                    ]
                },
                {
                    "Bras & Lingerie Sets": [
                        "Bra",
                        "Lingerie Sets",
                        "Lingerie Accessories"
                    ]
                },
                {
                    "Briefs": [
                        "Briefs"
                    ]
                },
                {
                    "Shapewear": [
                        "Shapewear"
                    ]
                },
                {
                    "Period Panty": [
                        "Period Panty"
                    ]
                }
            ]
        }
    ]
};

export default function VerticalPage() {
    const vertical = [
        {
            "MENS WEAR": {
                "img": "Image URL",
                "categories": ["Western Wear", "bottomwear", "activewear", "regis"]
            },
        },
        {
            "footwear": {
                "img": "Image URL",
                "categories": ["sneakers", "sandal"]
            }
        },
        {
            "electronics": {
                "img": "Image URL",
                "categories": ["desktop", "mobile"]
            }
        }

    ]

    const verticalArray = ["MENS WEAR","WOMENS WEAR"];


    const category = {
        "bottomwear": ["trousers", "shorts"],
        "Western Wear": ["Top Wear", "shirt", "bra", "sandow"],
        "activewear": ["love", "rage"],
        "regis": ["geralt", "triss"],
        "sneakers": ["aa", "bb"],
        "sandal": ["A", "D"],
        "desktop": ["SS", "XX"],
        "mobile": ["OO", "pp"],
    }

    const subCategory = {
        "trousers": ["trousers", "shorts"],
        "shorts": ["top", "shirt", "bra", "sandow"],
        "Top Wear": ["T-shirts", "rage"],
        "shirt": ["geralt", "triss"],
        "bra": ["aa", "bb"],
        "sandow": ["A", "D"],
        "love": ["SS", "XX"],
        "rage": ["OO", "pp"],
    }

    const [selectverticalIndex, setVerticalIndex] = useState(null);
    const [selectVertical, setSelectVertical] = useState("");
    const [selectCategory, setSelectCategory] = useState("");
    const [selectCategoryIndex, setSelectCategoryIndex] = useState("");
    const [selectSubCategory, setSelectSubCategory] = useState("");
    const [selectSubCategoryIndex, setSelectSubCategoryIndex] = useState("");
    const [selectSubCategory2, setSelectSubCategory2] = useState("");
    const [loading, setLoading] = useState(false);

    const [index1, setIndex1] = useState();
    const [index2, setIndex2] = useState();

    const [files, setFiles] = useState([]);

    const [searchResults, setSearchResults] = useState([]);
    const [keyword, setKeyword] = useState("")

    function handleChange(e) {
        Array.from(e.target.files).map((ff) => {
            if (ff.size < 9961472) {
                files.push(ff);
            }
        });
        setFiles([...files]);
    }


    async function uploadMedia() {
        if (loading === false) {
            setLoading(true)
            if (files.length === 0) {
                window.alert("Please Upload At Least One Image")
            } else {
                const json = await uploadMultipleFilesToS3(files);
                if (json.success) {
                    let mUrls = [];
                    for (let i = 0; i < json.fileKeys.length; i++) {
                        mUrls.push(S3_URI + json.fileKeys[i]);
                    }
                    console.log("mUrls: ", mUrls);
                    let lr_id = uuidv4();
                    let l_id = uuidv4();
                    let obj = {
                        listing_request_id: lr_id,
                        listing_status: "Draft",
                        request_type: "Create",
                        listing_id: l_id,
                        manufacturer_id: localStorage.getItem('manufacturer_id'),
                        media_urls: mUrls,
                        vertical: selectVertical,
                        category: selectCategory,
                        sub_category: selectSubCategory,
                        sub_category2: selectSubCategory2,
                    }

                    const json2 = await saveListingRequest(obj);

                    if (json2.success) {
                        window.open(`/supplier/editlisting/${l_id}`, '_self')
                    } else {
                        window.alert('Something went wrong');
                    }
                } else {
                    window.alert('Something went wrong');
                }
            }
        }
    }

    function fuzzySearch(query) {
        setKeyword(query)
        if (query.trim() === "") {
            setSearchResults([])

        } else {
            const normalizedQuery = query.toLowerCase();

            const results = searchArray.filter((path) => {
                const categories = path.split(' / ');
                let bestMatch = Infinity;

                // Iterate over the individual categories
                for (let category of categories) {
                    const normalizedCategory = category.toLowerCase();
                    const distance = levenshteinDistance(normalizedQuery, normalizedCategory);

                    // Update the best match if the distance is lower
                    if (distance < bestMatch) {
                        bestMatch = distance;
                    }
                }

                // Check if the best match is within the specified fuzziness
                if (bestMatch <= 3) {
                    return true;
                }

                return false;
            });
            console.log(results);
            setSearchResults(results)
        }
    }

    function levenshteinDistance(str1, str2) {
        const m = str1.length;
        const n = str2.length;

        const dp = Array(m + 1)
            .fill(null)
            .map(() => Array(n + 1).fill(null));

        for (let i = 0; i <= m; i++) {
            dp[i][0] = i;
        }
        for (let j = 0; j <= n; j++) {
            dp[0][j] = j;
        }

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1, // deletion
                    dp[i][j - 1] + 1, // insertion
                    dp[i - 1][j - 1] + cost // substitution
                );
            }
        }

        return dp[m][n];
    }

    const d1Ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (d1Ref.current && !d1Ref.current.contains(event.target)) {
                setKeyword("");
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [d1Ref]);

    function handleVerticalSelection(str) {
        const vData = str.split(' / ');
        let ind = verticalArray.findIndex((obj) => obj === vData[0]);
        if (ind !== -1) {
            setVerticalIndex(ind);
            setSelectVertical(vData[0]);
            let ind2 = allVerticals[`${Object.keys(allVerticals)[`${ind}`]}`].findIndex((obj) => Object.keys(obj)[0] === vData[1]);
            if (ind2 !== -1) {
                setSelectCategoryIndex(ind2);
                setSelectCategory(vData[1]);
                let ind3 = allVerticals[`${Object.keys(allVerticals)[`${ind}`]}`][ind2][`${vData[1]}`].findIndex((obj) => Object.keys(obj)[0] === vData[2]);
                if (ind3 !== -1) {
                    setSelectSubCategoryIndex(ind3);
                    setSelectSubCategory(vData[2]);
                    let ind4 = allVerticals[`${Object.keys(allVerticals)[`${ind}`]}`][ind2][`${vData[1]}`][`${ind3}`][`${vData[2]}`].findIndex((obj) => obj === vData[3]);
                    if (ind4 !== -1) {
                        setSelectSubCategory2(vData[3]);
                    }
                }
            }
        }
        setKeyword("")
    }

    return (
        <div className="vpBox">

            <div className="vpTB">
                <i onClick={()=>{window.history.back()}} style={{ color: 'white', fontSize: '20px' }} class="fa-solid fa-arrow-left"></i>
                <p className="vpTBT1">Add Single Listing</p>
            </div>

            <AddProgress mode1={"active"} mode2={"inActive"} mode3={"inActive"} />

            <p className="vpVBT1">Search Category</p>

            <div className="vpVBSearchBox">
                <input value={keyword} onChange={(e) => { fuzzySearch(e.target.value) }} className="vpVBSearch" type="text" placeholder="Search For Product Category" />
                <div ref={d1Ref} className={keyword.trim() === "" ? "vpVBSearchBox-ResultsInactive" : "vpVBSearchBox-Results"}>
                    {searchResults.length === 0 ? <p className="vpVBSearchBox-Results-text">No Match for '{keyword}' </p> :
                        searchResults.map((item) => (
                            <div onClick={() => { handleVerticalSelection(item) }} className="vpVBSearchBox-Results-item">{item}</div>
                        ))}
                </div>
            </div>

            <div className="vpVBRow">

                <div className="vpVB1">

                    {verticalArray.map((p, index) => (
                        <div className={index === selectverticalIndex ? "vpVBItem" : "vpVBItemInactive"} onClick={() => { console.log("Verticla"); setSelectCategory(""); setSelectSubCategory(""); setSelectSubCategory2(""); setSelectVertical(p); setVerticalIndex(index) }}>
                            {p}</div>
                    ))}

                </div>

                <div className="vpVB2">
                    {selectverticalIndex === null ? <div></div> : allVerticals[`${Object.keys(allVerticals)[`${selectverticalIndex}`]}`].map((c, index) => (
                        <div className={Object.keys(c)[0] === selectCategory ? "vpVBItem" : "vpVBItemInactive"} onClick={() => { console.log("Category"); setSelectSubCategory(""); setSelectSubCategory2(""); setSelectCategoryIndex(index); setSelectCategory(Object.keys(c)[0]) }}>{Object.keys(c)[0]}</div>
                    ))}
                </div>

                <div className="vpVB3">
                    {selectCategory === "" ? <div></div> : allVerticals[`${Object.keys(allVerticals)[`${selectverticalIndex}`]}`][selectCategoryIndex][`${selectCategory}`].map((d, index) => (
                        <div className={Object.keys(d)[0] === selectSubCategory ? "vpVBItem" : "vpVBItemInactive"} onClick={() => { console.log("Verticla"); setSelectSubCategory2(""); setSelectSubCategory(Object.keys(d)[0]); setSelectSubCategoryIndex(index) }}>{Object.keys(d)[0]}</div>
                    ))}
                </div>


                <div className="vpVB4">
                    {selectSubCategory === "" ? <div></div> : allVerticals[`${Object.keys(allVerticals)[`${selectverticalIndex}`]}`][selectCategoryIndex][`${selectCategory}`][`${selectSubCategoryIndex}`][`${selectSubCategory}`].map((e, index) => (
                        <div className={e === selectSubCategory2 ? "vpVBItem" : "vpVBItemInactive"} onClick={() => { console.log("Verticla"); setSelectSubCategory2(e) }}>{e}</div>
                    ))}
                </div>

                {selectSubCategory2 === "" ? <div></div> : <div className="vpIB">
                    <div className="vpIBD1">{selectVertical} / {selectCategory} / {selectSubCategory} / {selectSubCategory2}</div>
                    <div className="vpIBUpload">
                        <div className="vpIBUploadImages">
                            {files.map((p, index) => (
                                <VImage key={{ p, index }} index={index} data={(p)} setFiles={setFiles} files={files} index1={index1} setIndex1={setIndex1} index2={index2} setIndex2={setIndex2} />
                            ))}
                        </div>
                        <input className="vpIBUploadInput" type="file" onChange={handleChange} accept="image/*, video/*" size={1} multiple />
                    </div>
                    <div onClick={() => { uploadMedia(); }} className={files.length === 0 ? "vpIBButtonInactive" : "vpIBButton"}>Add Product Details</div>
                </div>}

            </div>


        </div>
    )
}