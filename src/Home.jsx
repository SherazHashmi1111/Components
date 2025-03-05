import React, { Fragment } from 'react'

function Home() {
  return (
    <Fragment>
        <section className="flex items-center justify-center h-screen bg-[url(https://images.unsplash.com/photo-1488330890490-c291ecf62571?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
            <div className="text-center">
            <h1 className="text-5xl font-bold text-white">Welcome to our website</h1>
            <p className="text-2xl text-gray-200">We provide the best services for you</p>
            <button className="bg-indigo-500 px-5 py-2 rounded-full text-white hover:bg-indigo-700 cursor-pointer duration-200 mt-4">
                Get Started
            </button>
            </div>
        </section>
    </Fragment>
  )
}

export default Home