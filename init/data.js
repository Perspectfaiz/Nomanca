const sampleListings =[
  {
    title: "Cozy Lakeside Cottage",
    description: "Enjoy serenity by the lake with stunning sunrise views and tranquil vibes.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1678172259360-b3968e99ba99?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "cozy_lakeside_cottage_1.jpg"
    },
    price: 1200,
    location: "Lake Tahoe",
    country: "United States"
  },
  {
    title: "Desert Dome in Joshua Tree",
    description: "Experience desert living in this geodesic dome under the stars.",
    image: {
      url: "https://images.unsplash.com/photo-1623005329287-0848374575d3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "desert_dome_joshua_tree_2.jpg"
    },
    price: 900,
    location: "Joshua Tree",
    country: "United States"
  },
  {
    title: "Rustic Farmhouse in Normandy",
    description: "Charming farmhouse retreat surrounded by lush green fields and peace.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1710871399106-9f80e8a70989?q=80&w=2908&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "rustic_farmhouse_normandy_3.jpg"
    },
    price: 1900,
    location: "Normandy",
    country: "France"
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa.",
    image: {
      url: "https://images.unsplash.com/photo-1623005291130-4d5d6f9c660e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "historic_villa_tuscany_4.jpg"
    },
    price: 2500,
    location: "Florence",
    country: "Italy"
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat.",
    image: {
      url: "https://images.unsplash.com/photo-1719299225627-3b902b8805c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "secluded_treehouse_getaway_5.jpg"
    },
    price: 1300,
    location: "Portland",
    country: "United States"
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Stay in the heart of Tokyo with all modern amenities and skyline views.",
    image: {
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      filename: "modern_apartment_tokyo_6.jpg"
    },
    price: 2700,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Cabin in the Canadian Rockies",
    description: "Escape to the mountains with breathtaking views and hiking trails.",
    image: {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      filename: "cabin_canadian_rockies_7.jpg"
    },
    price: 1400,
    location: "Banff",
    country: "Canada"
  },
  {
    title: "Beach Bungalow in Bali",
    description: "Relax by the beach in this tropical paradise with ocean breeze.",
    image: {
      url: "https://images.unsplash.com/photo-1623005385096-97aeea4d281a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "beach_bungalow_bali_8.jpg"
    },
    price: 1500,
    location: "Canggu",
    country: "Indonesia"
  },
  {
    title: "Ski Lodge in Swiss Alps",
    description: "Cozy up in the Alps with skiing, hot chocolate, and snowy views.",
    image: {
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      filename: "ski_lodge_swiss_alps_9.jpg"
    },
    price: 3000,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Hobbit House in New Zealand",
    description: "Live your fantasy in this hobbit-style earth house in the hills.",
    image: {
      url: "https://images.unsplash.com/photo-1606989254570-02aa0d7ea083?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "hobbit_house_new_zealand_10.jpg"
    },
    price: 1100,
    location: "Matamata",
    country: "New Zealand"
  },
  {
    title: "Rooftop Loft in NYC",
    description: "Stylish loft with skyline view in the heart of Manhattan.",
    image: {
      url: "https://images.unsplash.com/photo-1654866736505-1f28d060748e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
    filename: "rooftop_loft_nyc_11.jpg"
    },
    price: 3500,
    location: "New York City",
    country: "United States"
  },
  {
    title: "Jungle Retreat in Costa Rica",
    description: "Surround yourself with tropical wildlife in this peaceful jungle stay.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1731789271938-c4348be08c80?q=80&w=3151&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "jungle_retreat_costa_rica_12.jpg"
    },
    price: 1000,
    location: "Monteverde",
    country: "Costa Rica"
  },
  {
    title: "Minimalist Flat in Berlin",
    description: "A sleek and modern flat near art galleries and street cafés.",
    image: {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      filename: "minimalist_flat_berlin_13.jpg"
    },
    price: 2000,
    location: "Berlin",
    country: "Germany"
  },
  {
    title: "Canal House in Amsterdam",
    description: "Traditional Dutch house overlooking serene canals.",
    image: {
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      filename: "canal_house_amsterdam_14.jpg"
    },
    price: 2200,
    location: "Amsterdam",
    country: "Netherlands"
  },
  {
    title: "Luxury Condo in Dubai",
    description: "High-rise luxury with desert views and private pool access.",
    image: {
      url: "https://images.unsplash.com/photo-1637340152426-f6a0db5c32f0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "luxury_condo_dubai_15.jpg"
    },
    price: 4000,
    location: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Rainforest Cabin in Brazil",
    description: "Disconnect in the Amazon with this eco-friendly jungle cabin.",
    image: {
      url: "https://images.unsplash.com/photo-1527349201866-3ab950f224bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "rainforest_cabin_brazil_16.jpg"
    },
    price: 1300,
    location: "Manaus",
    country: "Brazil"
  },
  {
    title: "Countryside Yurt in Mongolia",
    description: "Authentic yurt stay surrounded by vast open landscapes.",
    image: {
      url: "https://images.unsplash.com/photo-1690580893847-8203c1788b9f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "countryside_yurt_mongolia_17.jpg"
    },
    price: 900,
    location: "Ulaanbaatar",
    country: "Mongolia"
  },
  {
    title: "Ocean View Suite in Santorini",
    description: "Stunning sea view and sunsets from your own Greek paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1679683171686-6242c0fde282?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "ocean_view_suite_santorini_18.jpg"
    },
    price: 2800,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Island Villa in Maldives",
    description: "Crystal-clear waters, private deck, and tropical elegance.",
    image: {
      url: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
      filename: "island_villa_maldives_19.jpg"
    },
    price: 5000,
    location: "Male",
    country: "Maldives"
  },
  {
    title: "Snow Cabin in Iceland",
    description: "Watch the Northern Lights from this heated snow retreat.",
    image: {
      url: "https://images.unsplash.com/photo-1665824277035-cf332e92f37b?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "snow_cabin_iceland_20.jpg"
    },
    price: 2600,
    location: "Reykjavik",
    country: "Iceland"
  },
  {
    title: "Riad in Marrakech",
    description: "Traditional Moroccan home with vibrant decor and courtyard.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1711036291674-37259110b6df?q=80&w=2978&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "riad_marrakech_21.jpg"
    },
    price: 1700,
    location: "Marrakech",
    country: "Morocco"
  },
  {
    title: "Eco Dome in Arizona",
    description: "Sustainable off-grid dome in the heart of the desert.",
    image: {
      url: "https://images.unsplash.com/photo-1739542314756-055a369aca11?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "eco_dome_arizona_22.jpg"
    },
    price: 950,
    location: "Sedona",
    country: "United States"
  },
  {
    title: "Wine Country Estate",
    description: "Luxury estate in Napa Valley surrounded by vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1684514570577-35f958b52870?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "wine_country_estate_23.jpg"
    },
    price: 3200,
    location: "Napa",
    country: "United States"
  },
  {
    title: "Island Hut in Thailand",
    description: "Chill in a bamboo hut steps from white sandy beaches.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      filename: "island_hut_thailand_24.jpg"
    },
    price: 800,
    location: "Koh Samui",
    country: "Thailand"
  },
  {
    title: "Highland Lodge in Scotland",
    description: "Stone-built lodge with fireplace and loch views.",
    image: {
      url: "https://images.unsplash.com/photo-1589196940346-64fc9a576742?q=80&w=3109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "highland_lodge_scotland_25.jpg"
    },
    price: 2100,
    location: "Inverness",
    country: "Scotland"
  },
  {
    title: "Mountain Chalet in Austria",
    description: "Cozy mountain hideaway perfect for ski lovers.",
    image: {
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      filename: "mountain_chalet_austria_26.jpg"
    },
    price: 2400,
    location: "Innsbruck",
    country: "Austria"
  },
  {
    title: "Colonial Home in Havana",
    description: "Live the Cuban lifestyle in a colorful colonial house.",
    image: {
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      filename: "colonial_home_havana_27.jpg"
    },
    price: 1100,
    location: "Havana",
    country: "Cuba"
  },
  {
    title: "Art Loft in Barcelona",
    description: "Modern loft surrounded by Gaudí architecture and tapas bars.",
    image: {
      url: "https://images.unsplash.com/photo-1635255228880-59045e664d52?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "art_loft_barcelona_28.jpg"
    },
    price: 2300,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Igloo Stay in Finland",
    description: "Unique Arctic experience with glass roof to see auroras.",
    image: {
      url: "https://images.unsplash.com/photo-1684229441736-12ba0ead8087?q=80&w=2896&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "igloo_stay_finland_29.jpg"
    },
    price: 3100,
    location: "Rovaniemi",
    country: "Finland"
  },
  {
    title: "Vintage Airstream in California",
    description: "Retro charm with modern comforts in a scenic park.",
    image: {
      url: "https://images.unsplash.com/photo-1711988739014-112726a81848?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "vintage_airstream_california_30.jpg"
    },
    price: 850,
    location: "Big Sur",
    country: "United States"
  },
  {
    title: "Luxury Palace Stay in Jaipur",
    description: "Royal treatment in a historic palace with modern luxuries.",
    image: {
      url: "https://images.unsplash.com/photo-1595859017776-93dcbb2e2ed3?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "luxury_palace_stay_jaipur_31.jpg"
    },
    price: 2700,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Art Loft in Barcelona",
    description: "Modern loft surrounded by Gaudí architecture and tapas bars.",
    image: {
      url: "https://images.unsplash.com/photo-1635255228880-59045e664d52?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "art_loft_barcelona_32.jpg"
    },
    price: 2300,
    location: "Barcelona",
    country: "Spain"
  },
  {
    title: "Igloo Stay in Finland",
    description: "Unique Arctic experience with glass roof to see auroras.",
    image: {
      url: "https://images.unsplash.com/photo-1684229441736-12ba0ead8087?q=80&w=2896&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG0dG8twaGFlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "igloo_stay_finland_33.jpg"
    },
    price: 3100,
    location: "Rovaniemi",
    country: "Finland"
  }
]

module.exports = {data : sampleListings};