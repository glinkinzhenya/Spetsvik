import React, { useEffect, useState } from "react";
import getDataFromFirestore from "../test/getDataFromFirestore";


function MyComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getDataFromFirestore()
            .then((data) => {
                setData(data);
                console.log(data);
            })
            .catch((error) => {
                // Обработка ошибок
            });
    }, []);
    // Рендеринг данных
    return (
        <div>
            {data ? (
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{`${item.fieldName}: ${item.fieldValue}`}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
}

export default MyComponent;
