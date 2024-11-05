import React from 'react'

function Results({results}) {
  return (
    <div>{results.map((result) => {
        <div 
        key = {result.id}
        className="">
            <h1 className="">{result}</h1>
        </div>
    })}</div>
  )
}

export default Results