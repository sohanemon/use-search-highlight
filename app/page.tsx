"use client"
import React, { } from 'react';
import { useSearchHighlight } from './search-highlight';
import { Link } from 'lucide-react';

const SearchHighlight = () => {
  const { searchTerm, setSearchTerm } = useSearchHighlight()


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <style>
        {`
::highlight(search-highlight) {
  background-color: blue;
  color: white;
}
`}
      </style>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <form className="space-y-4 max-w-xs w-full" data-shade="900">
        <div className="field">
          <label className="text-title" htmlFor="email">Email</label>
          <input type='email' id="email" className="input variant-mixed sz-md" />
        </div>
      </form>

      <p>
        The Sundarbans, derived from the Bengali words "Sundar" (beautiful) and "Ban" (forest), is the largest contiguous mangrove forest in the world, spanning approximately 10,000 square kilometers across southern Bangladesh and eastern India. This unique ecosystem is situated on the delta formed by the confluence of the Ganges, Brahmaputra, and Meghna rivers, extending from the Baleswar River in Bangladesh's Khulna Division to the Hooghly River in India's West Bengal state. Approximately 60% of the Sundarbans lies within Bangladesh, with the remaining 40% in India. citeturn0search2

        **Geography and Hydrology**

        The Sundarbans is characterized by an intricate network of tidal waterways, mudflats, and small islands, creating a dynamic and ever-changing landscape. The region's topography is predominantly flat and low-lying, with elevations ranging from 0.9 to 2.1 meters above sea level. The area is subject to daily tidal fluctuations, which play a crucial role in shaping the ecosystem and influencing the distribution of flora and fauna.

        The hydrology of the Sundarbans is influenced by both freshwater inputs from the rivers and saline water from the Bay of Bengal. During the monsoon season, heavy rainfall increases freshwater flow, reducing salinity levels and depositing nutrient-rich sediments that support the growth of mangroves and other vegetation. Conversely, during the dry season, reduced river discharge and higher evaporation rates lead to increased salinity, affecting species composition and distribution.

        **Flora**

        The Sundarbans is home to a diverse array of plant species, with mangroves being the dominant vegetation type. The forest supports approximately 26 of the world's 50 true mangrove species. citeturn0search1

        The dominant mangrove species is the Sundari tree (*Heritiera fomes*), which contributes significantly to the forest's name and is highly valued for its durable timber. Other common mangrove species include:

        - **Gewa** (*Excoecaria agallocha*): A medium-sized tree known for its light wood and medicinal properties.

        - **Goran** (*Ceriops decandra*): A shrub or small tree often found in the more saline areas of the forest.

        - **Keora** (*Sonneratia apetala*): A pioneer species that colonizes newly formed mudflats.

        - **Kankra** (*Bruguiera gymnorhiza*): A species tolerant of higher salinity, often found along the fringes of the forest.

        The forest floor is often blanketed with dense undergrowth, including species like:

        - **Nypa Palm** (*Nypa fruticans*): Common along drainage lines and known for its feathery fronds.

        - **Hantal Palm** (*Phoenix paludosa*): Found on drier ground, riverbanks, and levees.

        These plant species have adapted to the challenging conditions of the mangrove environment, such as high salinity, waterlogged soils, and tidal inundation.

        **Fauna**

        The Sundarbans boasts a rich and diverse fauna, providing critical habitat for numerous species, many of which are endangered or endemic. Notable fauna include:

        - **Bengal Tiger** (*Panthera tigris tigris*): The Sundarbans is renowned for its population of Bengal tigers, which have adapted to the mangrove environment. These tigers are known for their swimming abilities, often traversing the numerous waterways that crisscross the region. As of recent estimates, the population of Bengal tigers in the Sundarbans is approximately 106 individuals. citeturn0search4

        - **Estuarine Crocodile** (*Crocodylus porosus*): The largest of all living reptiles, these crocodiles inhabit the rivers and estuaries of the Sundarbans.

        - **Indian Python** (*Python molurus*): A non-venomous python species found in the forested areas.

        - **Spotted Deer** (*Axis axis*): Also known as chital, these deer are commonly found grazing in the grasslands and forest clearings.

        - **Wild Boar** (*Sus scrofa*): Frequently encountered in the forest, they play a role in the ecosystem by foraging and turning over soil.

        - **Rhesus Macaque** (*Macaca mulatta*): The only primate species found in the Sundarbans, often seen in groups.

        - **Water Monitor Lizard** (*Varanus salvator*): A large lizard species commonly found near water bodies.

        - **Gangetic Dolphin** (*Platanista gangetica*): An endangered freshwater dolphin species occasionally spotted in the rivers of the Sundarbans.

        The avian diversity of the Sundarbans is remarkable, with over 260 bird species recorded, including:

        - **Lesser Adjutant Stork** (*Leptoptilos javanicus*): A large wading bird found in wetlands.

        - **Brown-winged Kingfisher** (*Pelargopsis amauroptera*): A near-threatened species endemic to the mangrove forests.

        - **Masked Finfoot** (*Heliopais personatus*): An elusive and endangered species inhabiting the dense mangroves.

        - **Mangrove Pitta** (*Pitta megarhyncha*): A colorful bird species residing in the mangrove understory.

        The waterways and mudflats of the Sundarbans support a variety of fish, crustaceans, and mollusks, which are vital to both the ecosystem and the livelihoods of local communities.

        **Ecological Significance**

        The Sundarbans plays a crucial role in coastal </p>

    </div>
  );
};

export default SearchHighlight;

