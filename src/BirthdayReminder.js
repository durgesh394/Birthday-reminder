import React from 'react'

const BirthdayReminder = (props) => {
    const {people} = props


    return (<>
        {
            people.map((elm) => {


                return (
                    <>
                        <div className="birthCon">
                            <img src={elm.img} alt="" className='pepoleImg' style={{width :"50px" ,height:"50px"}}/>
                            <div className="pepoleabout">
                                <h5 style={{fontFamily:"revert"}}>{elm.name}</h5>
                                <p style={{fontFamily:"revert"}}>{elm.age} Years</p>
                            </div>
                        </div>
                    </>
                )

            })
        }
    </>)

}

export default BirthdayReminder