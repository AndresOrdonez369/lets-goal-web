import React, { useState, useEffect } from 'react';
import ImageBackground from '../assets/letsbackground.jpg';
import ImageBackground1 from '../assets/letsbackground1.jpg';
import firebase from '../firebase';

const Landing = () => {
    // state
    const [background, setBackground] = useState(ImageBackground);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // change background
    useEffect(() => {
        const img = setInterval(() => {
            if (background === ImageBackground) {
                setBackground(ImageBackground1);
            } else {
                setBackground(ImageBackground);
            }
        }, 5000);
        return () => {
            clearInterval(img)
        }
    }, [background]);
    // submit
    const submit = async (Name, Email) => {
        if (Name.trim() !== '' && Email.trim() !== '') {
            const db = firebase.firestore();
            await db.collection('data').add({
                name: Name,
                email: Email,
            })
            .then(() => console.log('yes'))
            .catch((error) => console.log(error));
            
            setName('');
            setEmail('');
        }
    }
    return (
        <main>
            <div className="relative pt-16 pb-32 block content-center items-center justify-center"
            style={{
              minHeight: "100vh"
            }}>
                <div className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: "url(" + ImageBackground + ")",
                    }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
            </div>
            <div className="relative flex-start mx-auto mt-20">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div className="pr-12">
                            <h1 className="text-white font-semibold text-5xl" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="0">
                                Welcome to soccer revolution.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <section className="relative mt-0 flex block py-24 lg:pt-60 bg-gray-900">
            <div className="container mx-auto px-8 mt-10">
                <div className="flex flex-wrap justify-center lg:-mt-20 -mt-48">
                <div className="w-full lg:w-8/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="0">
                    <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl font-semibold">
                        ¿Quieres enterarte de todas las novedades?
                        </h4>
                        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                        Completa este formulario y recibirás todas las noticias.
                        </p>
                        <div className="relative w-full mb-3 mt-8">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="full-name"
                        >
                            Nombre
                        </label>
                        <input
                            type="text"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Nombre completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ transition: "all .15s ease" }}
                        />
                        </div>

                        <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ transition: "all .15s ease" }}
                        />
                        </div>
                        <div className="text-center mt-6">
                        <button
                            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            onClick={() => submit(name, email)}
                        >
                            Enviar información
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </main>
    );
}
 
export default Landing;