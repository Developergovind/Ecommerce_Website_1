import React, { useEffect, useState } from 'react';
import { getProductDetails } from '../services/products';
import '../components/details.css'
import $ from 'jquery'; 
function MenProducts() {
    $(".rating-component .star").on("mouseover", function () {
        var onStar = parseInt($(this).data("value"), 10); //
        $(this).parent().children("i.star").each(function (e) {
          if (e < onStar) {
            $(this).addClass("hover");
          } else {
            $(this).removeClass("hover");
          }
        });
      }).on("mouseout", function () {
        $(this).parent().children("i.star").each(function (e) {
          $(this).removeClass("hover");
        });
      });
      
      $(".rating-component .stars-box .star").on("click", function () {
        var onStar = parseInt($(this).data("value"), 10);
        var stars = $(this).parent().children("i.star");
        var ratingMessage = $(this).data("message");
        var i;
        var msg = "";
        if (onStar > 1) {
          msg = onStar;
        } else {
          msg = onStar;
        }
        $('.rating-component .starrate .ratevalue').val(msg);
        
      
       
        $(".fa-smile-wink").show();
        
        $(".button-box .done").show();
      
        if (onStar === 5) {
          $(".button-box .done").removeAttr("disabled");
        } else {
          $(".button-box .done").attr("disabled", "true");
        }
      
        for (i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass("selected");
        }
      
        for (i = 0; i < onStar; i++) {
          $(stars[i]).addClass("selected");
        }
      
        $(".status-msg .rating_msg").val(ratingMessage);
        $(".status-msg").html(ratingMessage);
        $("[data-tag-set]").hide();
        $("[data-tag-set=" + onStar + "]").show();
      });
      
      $(".feedback-tags  ").on("click", function () {
        var choosedTagsLength = $(this).parent("div.tags-box").find("input").length;
        choosedTagsLength = choosedTagsLength + 1;
      
        if ($(this).hasClass("choosed")) {
          $(this).removeClass("choosed");
          choosedTagsLength = choosedTagsLength - 2;
        } else {
          $(this).addClass("choosed");
          $(".button-box .done").removeAttr("disabled");
        }
      
        console.log(choosedTagsLength);
      
        if (choosedTagsLength <= 0) {
          $(".button-box .done").attr("enabled", "false");
        }
      });
      
      
      
      $(".compliment-container .fa-smile-wink").on("click", function () {
        $(this).fadeOut("slow", function () {
          $(".list-of-compliment").fadeIn();
        });
      });
      
      
      
      $(".done").on("click", function () {
        $(".rating-component").hide();
        $(".feedback-tags").hide();
        $(".button-box").hide();
        $(".submited-box").show();
        $(".submited-box .loader").show();
      
        setTimeout(function () {
          $(".submited-box .loader").hide();
          $(".submited-box .success-message").show();
        }, 1500);
      });
      
    const [productDetails, setProductDetails] = useState({});
    const [productimages, setProductImages] = useState({});

    const getproduct_Details = async () => {
        const id = JSON.parse(localStorage.getItem("product_id"))
        const data = await getProductDetails(id)
        setProductDetails(data.productDescription[0])
        setProductImages(data.productImages)
    }
    useEffect(() => {
        getproduct_Details();
    }, [])

    return (
        <React.Fragment>
            {console.log("hello world", productDetails)}
            <section className="section-p1 prodetails">
                <div className="single-pro-image">
                    <img
                        src={productDetails.product_image}
                        width="100%"
                        className="mainImg"
                    />

                    <div className="small-image-group">

                        <div className="small-img-column">
                            <img
                                src={productimages[0]?.product_image}
                                alt=""
                                width="100%"
                                className="small-img"
                            />
                        </div>
                        <div className="small-img-column">
                            <img
                                src={productimages[1]?.product_image}
                                alt=""
                                width="100%"
                                className="small-img"
                            />
                        </div>
                        <div className="small-img-column">
                            <img
                                src={productimages[2]?.product_image}
                                alt=""
                                width="100%"
                                className="small-img"
                            />
                        </div>
                        <div className="small-img-column">
                            <img
                                src={productimages[3]?.product_image}
                                alt=""
                                width="100%"
                                className="small-img"
                            />
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="card">
                                <button className='AddTOCART'> <span class="material-symbols-outlined">
                                    shopping_cart
                                </span>Add to Cart</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <button className='AddTOCART'> <span class="material-symbols-outlined">
                                    bolt
                                </span>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-pro-details">
                    <h2>Fashion T Shirts</h2>
                    <h4><span style={{ color: "#008178", fontSize: "25px", float: "left" }}>Product Name :</span>{productDetails.product_name}</h4>
                    <h2><span style={{ color: "#008178", fontSize: "25px", float: "left" }}>Price </span>{`$${productDetails.Price}`}</h2>
                    <span style={{ color: "#008178", fontSize: "25px", float: "left" }}>Select Size </span>
                    <select className='select'>
                        <option>Select Size</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>Large</option>
                    </select>
                    <span style={{ color: "#008178", fontSize: "25px", float: "left" }}>Quantity </span>
                    <input type="number" defaultValue={1} min={0} />
                    <h3 style={{ color: "cyan" }}><span style={{ color: "#008178", fontSize: "25px", float: "left", }}>Seller </span>{productDetails.seller}</h3>
                    <h2>Product Details</h2>
                    <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam atque
                        optio ex voluptate, illum qui maiores magni eum expedita delectus, eveniet
                        ad? Assumenda quisquam ratione, sed corporis dolore dicta. Consectetur!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illum
                        ducimus maiores sit quod dolorem reprehenderit accusantium facere, cum
                        tempora culpa eos eligendi, modi expedita hic eaque nam sunt quia! Lorem
                        ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
                        praesentium dolor consequatur quidem iste, harum veritatis optio! Eaque
                        laborum consectetur ipsa et, consequatur minus laudantium sequi, aperiam,
                        quia quod esse.
                    </span>
                </div>
            </section>
            <div className="wrapper">
                <div className="master">
                    <h1>Review And rating</h1>
                    <h2>How was your experience about our product?</h2>
                    <div className="rating-component">
                        <div className="status-msg">
                            <label>
                                <input
                                    className="rating_msg"
                                    type="hidden"
                                    name="rating_msg"
                                    defaultValue=""
                                />
                            </label>
                        </div>
                        <div className="stars-box">
                            <i
                                className="star fa fa-star"
                                title="1 star"
                                data-message="Poor"
                                data-value={1}
                            />
                            <i
                                className="star fa fa-star"
                                title="2 stars"
                                data-message="Too bad"
                                data-value={2}
                            />
                            <i
                                className="star fa fa-star"
                                title="3 stars"
                                data-message="Average quality"
                                data-value={3}
                            />
                            <i
                                className="star fa fa-star"
                                title="4 stars"
                                data-message="Nice"
                                data-value={4}
                            />
                            <i
                                className="star fa fa-star"
                                title="5 stars"
                                data-message="very good qality"
                                data-value={5}
                            />
                        </div>
                        <div className="starrate">
                            <label>
                                <input
                                    className="ratevalue"
                                    type="hidden"
                                    name="rate_value"
                                    defaultValue=""
                                />
                            </label>
                        </div>
                    </div>
                    <div className="feedback-tags">
                        <div className="tags-container" data-tag-set={1}>
                            <div className="question-tag">Why was your experience so bad?</div>
                        </div>
                        <div className="tags-container" data-tag-set={2}>
                            <div className="question-tag">Why was your experience so bad?</div>
                        </div>
                        <div className="tags-container" data-tag-set={3}>
                            <div className="question-tag">
                                Why was your average rating experience ?
                            </div>
                        </div>
                        <div className="tags-container" data-tag-set={4}>
                            <div className="question-tag">Why was your experience good?</div>
                        </div>
                        <div className="tags-container" data-tag-set={5}>
                            <div className="make-compliment">
                                <div className="compliment-container">
                                    Give a compliment
                                    <i className="far fa-smile-wink" />
                                </div>
                            </div>
                        </div>
                        <div className="tags-box">
                            <input
                                type="text"
                                className="tag form-control"
                                name="comment"
                                id="inlineFormInputName"
                                placeholder="please enter your review"
                            />
                            <input
                                type="hidden"
                                name="product_id"
                                defaultValue="{{ $products->id }}"
                            />
                        </div>
                    </div>
                    <div className="button-box">
                        <input
                            type="submit"
                            className=" done btn btn-warning"
                            disabled="disabled"
                            defaultValue="Add review"
                        />
                    </div>
                    <div className="submited-box">
                        <div className="loader" />
                        <div className="success-message">Thank you!</div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default MenProducts


