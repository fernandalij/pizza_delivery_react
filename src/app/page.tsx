'use client'
import Image from "next/image";
import { Pizza } from "./pizzaComponents/pizza";
import { Client } from "./pizzaComponents/client";
import { useState } from "react";
import { pizzas } from "@/data/pizzas";
import Modal from "./pizzaComponents/Modal";

const Page = () => {
  const [showModal, setShowModal] = useState(false)
  const [imgOfModal, setImgOfModal] = useState('')
  const [descrip, setDescrip] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)

  const openModal = (id: number) => {
    const pizza = pizzas.find(item => item.id === id)
    if (pizza) {
      setImgOfModal(pizza.img)
      setDescrip(pizza.description)
      setName(pizza.name)
      setPrice(pizza.price)
      setShowModal(true)

    }
  }


  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-7">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className=" relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/pizzaTop.png"
          alt="Next.js Logo"
          width={100}
          height={37}
          priority
        />
      </div>
      <div  className="flex  justify-center h-screen-20vh p-5">
        <div  onClick={closeModal} className="text-center">
          <h1 className="text-4xl font-bold mb-4-0rem">PIZZA <span>Delivery</span></h1>
          <p className="text-lg text-gray-500 font-light">Escolha sua pizza</p>
        </div>
      </div>
      <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pizzas.map(item => (
          <Pizza
            key={item.id}
            pizza={item}
            onClick={() => openModal(item.id)}
          />

        ))}
      </div>
      {showModal && 
        <Modal image={imgOfModal} closeModal={closeModal} des={descrip} name={name} price={price} />
      }
    </main>
  );
}

export default Page
