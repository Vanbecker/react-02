///LISTE ENTIERE

// const MealsList = () => {
//     const mealsData = [
//         {
//             id: 1,
//             title: "Poulet au légumes",
//             image: "https://picsum.photos/200/300",
//             description: "Un bon poulet avec des légumes",
//         },
//         {
//             id: 2,
//             title: "Boeuf bourguignon",
//             image: "https://picsum.photos/200/300",
//             description: "Un bon boeuf bourguignon",
//         },
//         {
//             id: 3,
//             title: "Poisson aux légumes",
//             image: "https://picsum.photos/200/300",
//             description: "Un bon poisson avec des légumes",
//         },
//     ];

//     return (
//         <div className="meals-list">
//             {mealsData.map((meal, index) => (
//                 <div key={index} className="meal-item">
//                     <h2>{meal.title}</h2>
//                     <img src={meal.image} alt={meal.title} />
//                     <p>{meal.description}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }





// export default MealsList;




///LISTE AVEC TRUE ET FALSE
///////

const MealsList = () => {
    const mealsData = [
        {
            id: 1,
            title: "Poulet au légumes",
            image: "https://picsum.photos/200/300",
            description: "Un bon poulet avec des légumes",
            isPublished: true,
        },
        {
            id: 2,
            title: "Boeuf bourguignon",
            image: "https://picsum.photos/200/300",
            description: "Un bon boeuf bourguignon",
            isPublished: false,
        },
        {
            id: 3,
            title: "Poisson aux légumes",
            image: "https://picsum.photos/200/300",
            description: "Un bon poisson avec des légumes",
            isPublished: true,
        },
    ];

    const publishedMeals = mealsData.filter((meal) => meal.isPublished);

    return (
        <div className="meals-list">
            {publishedMeals.map((meal) => (
                <div key={meal.id} className="meal-item">
                    <h2>{meal.title}</h2>
                    <img src={meal.image} alt={meal.title} />
                    <p>{meal.description}</p>
                </div>
            ))}
        </div>
    );
};

export default MealsList;



