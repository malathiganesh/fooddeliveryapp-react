import './swiggy.css';
import image from '../images/karachi.jpg';
import frice from '../images/friedrice.jpg';
import showerma from '../images/shawarma.jpg';
import grill from '../images/grill.jpg';
function Foods() {
    const dish = [
        {
            fooditem: "South Indian Biriyani",
            deliverytime: "Deliver in 30mins",
            distance: "Distance:15 km",
            price: "Rs.120 for one"
        },
        {
            fooditem: "Chinese FriedRice",
            deliverytime: "Deliver in 20mins",
            distance: "Distance:10 km",
            price: "Rs.80 for one"
        },
        {
            fooditem: "Chicken Shawerma",
            deliverytime: "Deliver in 20mins",
            distance: "Distance:10 km",
            price: "Rs.90 for one"
        },{
            fooditem: "Grilled Chicken",
            deliverytime: "Deliver in 40mins",
            distance: "Distance:20 km",
            price: "Rs.300 for one"
        }
    ]
    return (
        <div>
            <div className='foodie'>
                <div className='items'>
                    <select>
                        <option>Sort</option>
                    </select>
                    <select>
                        <option>Fast Delivery</option>
                    </select>
                    <select>
                        <option>Great Offers</option>
                    </select>
                    <select>
                        <option>Rating</option>
                    </select>
                    <select>
                        <option>New Arrivals</option>
                    </select>
                    <select>
                        <option>Cuisiness</option>
                    </select>
                </div>
            </div>
            <div className='fooditems'>
                <div className='dish'>
                    <div className='container'>
                        <div className='tot'>
                            <div className='imgn'>
                                <img src={image} width={150} height={150}></img></div>
                            <div className='details'>
                                <div className='f1'><p>{dish[0].fooditem}</p></div>
                                <div className='f2'><p>{dish[0].deliverytime}</p></div>
                                <div className='f3'><p>{dish[0].price}</p></div>
                                <div className='f4'><p>{dish[0].distance}</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dish'>
                    <div className='container1 '>
                        <div className='tot1'>
                            <div className='imgn'>
                                <img src={frice} width={150} height={150}></img></div>
                            <div className='details'>
                                <p className='f1'>{dish[1].fooditem}</p>
                                <p className='f2'>{dish[1].deliverytime}</p>
                                <p className='f3'>{dish[1].price}</p>
                                <p className='f4'>{dish[1].distance}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dish'>
                    <div className='container2 '>
                        <div className='tot2'>
                            <div className='imgn'>
                                <img src={showerma} width={150} height={150}></img></div>
                            <div className='details'>
                                <p className='f1'>{dish[2].fooditem}</p>
                                <p className='f2'>{dish[2].deliverytime}</p>
                                <p className='f3'>{dish[2].price}</p>
                                <p className='f4'>{dish[2].distance}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dish'>
                    <div className='container3'>
                        <div className='tot3'>
                            <div className='imgn'>
                                <img src={grill} width={150} height={150}></img></div>
                            <div className='details'>
                                <p className='f1'>{dish[3].fooditem}</p>
                                <p className='f2'>{dish[3].deliverytime}</p>
                                <p className='f3'>{dish[3].price}</p>
                                <p className='f4'>{dish[3].distance}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Foods;