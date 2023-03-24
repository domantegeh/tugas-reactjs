import React, { Component, useState } from "react";

function Home() {
    return(
        <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200">
            {/* intro content */}
            <div className="flex items-center flex-wrap m-20">
                <div className="w-full md:w-1/2">
                    <h4 className="text-3xl text-gray-800 font-bold mb-3">Welcome to My Website !</h4>
                    <p className="text-gray-600 mb-8 mr-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, laboriosam fugit. Asperiores repudiandae suscipit, praesentium porro atque soluta. Consequuntur et saepe quas laborum laudantium. Magnam minus quae expedita eum impedit!</p>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="./hero.png" alt="Monitoring" />
                </div>
            </div>
        </div>
    );
}

export function Portofolio({kategori, judul, keterangan, tujuan, gambar, suka}) {
    const [tambah, setTambah] = useState(Number(suka));
    const tambahSuka = () => {
        setTambah(tambah + 1);
    };

    return (
        <section className="container px-6 py-4 mx-auto">
            <div className="grid gap-6 mb-2 md:grid-cols-2 lg:grid-cols-1">
                <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
                    <div className="p-3 mr-4 text-white rounded">
                        <img className="h-48 w-96" src={gambar} />
                    </div>
                    <div>
                        <span className="rounded text-white bg-blue-500 py-1 px-3">{kategori}</span>
                        <p className="mb-2 text-xl font-medium text-gray-900">{judul}</p>
                        <p className="mb-2 text-md font-medium text-black">{keterangan}</p>
                        <a href={tujuan} className="rounded text-white bg-green-500 py-1 px-3 cursor-pointer" target="_blank">Detail</a>
                        <p className="text-sm font-normal text-gray-700 my-1">{tambah} orang menyukai ini</p>
                        <button onClick={tambahSuka} className="bg-red-500 text-white py-1 px-3 mx-1 rounded cursor-pointer">
                            Sukai
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Kontak() {
    return(
        <div className="h-1/2 lg:h-screen">
            {/* intro content */}
            <div className="flex items-center flex-wrap m-20 p-10">
                <div className="w-full md:w-1/2">
                    <img className="mx-auto shadow-xl rounded-full h-48 w-48 max-w-150-px bg-red-500" src="./hero.png" alt="Monitoring" />
                </div>
                <div className="w-full md:w-1/2">
                    <h4 className="text-3xl text-gray-800 font-bold mb-3">Halo, Saya Ida Nyoman Tegeh Adnyana !</h4>
                    <p className="text-gray-600 mb-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, laboriosam fugit. Asperiores repudiandae suscipit, praesentium porro atque soluta. Consequuntur et saepe quas laborum laudantium. Magnam minus quae expedita eum impedit!</p>
                    <p>Kemampuan pemrograman web yang dipelajari :</p>
                    <ul>
                        <li className="list-disc list-inside">HTML</li>
                        <li className="list-disc list-inside">CSS</li>
                        <li className="list-disc list-inside">Javascript</li>
                        <li className="list-disc list-inside">PHP</li>
                    </ul>
                    <div className="flex items-center justify-center space-x-2 bg-indigo-200 my-5 py-2">
                        {/* Google */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                            d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                            fill-rule="evenodd"
                            clip-rule="evenodd" />
                        </svg>
                        {/* Facebook */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                        {/* Instagram */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        {/* GitHub */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;