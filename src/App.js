import './App.css';
import React from "react";


function App() {


    const arr1 = [
        {
            id: 1,
            title: "Mrs.",
            name: "Sonya",
            surname: "Smith",
            pesel: 66111626126,
            bio:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla, diam non tempus vulputate, tellus massa viverra diam, eget scelerisque ipsum ipsum vel sem.",
            avatar: "https://image.flaticon.com/icons/svg/145/145852.svg"
        },
        {
            id: 2,
            title: "Mr.",
            name: "Charles",
            surname: "Willard",
            pesel: 53052334461,
            bio:
                "Nullam in dignissim nibh. Sed lorem arcu, consectetur vel posuere quis, cursus sit amet massa. In eleifend ut urna in sodales. Vestibulum viverra lectus in efficitur ultricies.",
            avatar: "https://image.flaticon.com/icons/svg/145/145867.svg"
        },
        {
            id: 3,
            title: "Ms.",
            name: "Tina",
            surname: "Robinson",
            pesel: 67032584953,
            bio:
                "Phasellus euismod leo non lacus congue dapibus. Curabitur iaculis faucibus euismod. Vestibulum sem metus, congue at lacinia eget, suscipit at nunc.",
            avatar: "https://image.flaticon.com/icons/svg/145/145862.svg"
        }
    ];
    const arr2 = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil"]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true

    const imageUrl = "https://fer-api.coderslab.pl/assets/pexels-photo-4974914.jpeg";

    const result = () => {


    }



    return (
        <>
            {arr1.map((elem)=> {
                return (
                    <div className="person">
                        <img src={ elem.avatar } />
                        <div className="info">
                            <h1>{`${elem.name} ${elem.title} ${elem.surname}`}</h1>
                            <p>{ elem.bio }</p>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default App;