// Import required modules
import React, { useEffect, useState } from "react"; // React hooks for state and side-effects
import axios from "axios"; // HTTP client for making API requests

const Menu = () => {
  const [menuData, setMenuData] = useState([]); // State to store menu data

  // useEffect to fetch menu data on component mount
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/menu"); // Make a GET request to the backend
        setMenuData(res.data); // Update state with fetched data
      } catch (err) {
        console.error("Error fetching menu data", err); // Log error if the request fails
      }
    };

    fetchMenuData(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Menu</h1> {/* Page heading */}
      {menuData.map((category) => (
        <div key={category.category} className="mb-6"> {/* Loop through categories */}
          <h2 className="text-2xl font-semibold">{category.category}</h2> {/* Category title */}
          <ul className="list-disc ml-6">
            {category.items.map((item, index) => (
              <li key={index} className="mb-2"> {/* Loop through items in a category */}
                {item.title && <strong>{item.title}: </strong>} {/* Display title if available */}
                {item.description && <span>{item.description}</span>} {/* Display description */}
                {item.requirements && (
                  <div>
                    <strong>Requirements: </strong>
                    {item.requirements.join(", ")} {/* Display requirements as comma-separated */}
                  </div>
                )}
                {item.deadline && (
                  <div>
                    <strong>Deadline: </strong>
                    {item.deadline} {/* Display deadline */}
                  </div>
                )}
                {item.website && (
                  <div>
                    <a
                      href={item.website}
                      className="text-blue-500 underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Website {/* Link to additional info */}
                    </a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu; // Export the component for use in other parts of the app
