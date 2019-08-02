import React, { Component } from 'react'


class ProductItem extends Component{

    state = {
        changeShadow: false,
        rating: 0
    }

    handleHover = (props) => {
        this.setState(prevState => ({
            changeShadow: !prevState.changeShadow
        }))
    }

    ratingSystem = props  => {
        var rating = []
            for(var i=0; i< props; i++){
                rating.push(
                    <i class="fas fa-star"></i>
                )
                return rating
            }
            console.log(rating)
            
    }

    renderProduct = () => {

        const product =[
            {
                link: 'https://images-na.ssl-images-amazon.com/images/I/511gHpVco9L.jpg',
                name: 'iPhone xs max',
                price: '$ 1,449',
                location: 'Singapore',
                rating: 5
            },
            {
                link: 'https://image-us.samsung.com/SamsungUS/mobile/phones/06102019-new/NEW_Regular_S10_Lockup1_Blue_gallery.jpg?$product-details-jpg$',
                name: 'Samsung Galaxy S10',
                price: '1,299',
                location: 'Kuala Lumpur',
                rating: 4
            },
            {
                link: 'https://www.sunrise.ch/en/residential/geraete/handys/huawei-p30-pro.primaryproductimage.code-MDAwMDAwMDAwMDAwMDE5NzU3.format-hardware-configurator-xxl.png',
                name: 'Huawei P30 Pro',
                price:"$ 849",
                location: 'Bangkok',
                rating: 3
            },
            {
                link:'https://www.bhphotovideo.com/images/images1000x1000/google_ga00477_pixel_3_64gb_xl_1452311.jpg',
                name:'Google Pixel 3 XL',
                price:"$ 799",
                location: 'Melbourne',
                rating: 2
            },
            {
                link: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/OnePlus/OnePlus-7-Pro/Nebula-Blue/OnePlus-7-Pro-Nebula-Blue-frontimage.jpg',
                name: 'OnePlus 7 Pro',
                price:"$ 699",
                location: 'Canberra',
                rating: 1
            }
        ]

        

        return product.map( item => {

            //sconsole.log(item.rating)
            

        return(
            <div className={this.state.changeShadow ? 'card bg-white rounded col-sm-2 m-3 shadow-lg' : 'card bg-white rounded col-sm-2 m-3 '} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} 

            >
                <img  src={item.link} className="card-img-top" width="200px" length="200px" alt="Not Available"/>
                    <h5 className="card-title">{item.name}</h5>
                    

                    <h6 className="card-subtitle mb-2 text-muted">{item.price}</h6>
                    <p className="card-text">{item.location}</p>
                    <p className="card-text">
                    {this.ratingSystem(item.rating)}</p>
                </div>
        )
        }
    )
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                {this.renderProduct()}
                </div>
            </div>
        )
    }
}
export default ProductItem