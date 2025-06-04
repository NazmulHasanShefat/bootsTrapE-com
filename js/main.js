// script for sweper slider

var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
});




// fetch product from api
async function fetchProducts() {
  try{
    let res = await fetch("https://dummyjson.com/products");
    const myProduct = res.json();
    return myProduct;
  }
  catch (error){
    console.error("faild to fetch products",error);
    return error
  }
}
// include product in html use api data
fetchProducts()
   .then(product_data =>{
    console.log(product_data);
      let all_product_data = product_data.products;
      console.log(all_product_data);
      // adding product
      function addProduct_from_api(){
        let product_list_container = document.querySelector(".products-list-container");
        product_list_container.innerHTML = `
        
        ${all_product_data.map((productItem)=>{
          // return console.log(productItem.title);
          let x = productItem.rating;
          let rating_point_length = 1;
          let finalRating = Math.round(x * Math.pow(10,rating_point_length)) / Math.pow(10, rating_point_length);
          // console.log(finalRating);
          return `
            <div id="${productItem.id}" class="product position-relative px-3 py-3" style="width: 18.4%; height: max-content; border-radius: 8px;">
        <div class="pro-tags position-absolute" style="z-index: 999; top: 3%; height: max-content;">
          <div class="pt bg-danger text-white mb-2 mt-2">${Math.floor(productItem.discountPercentage)}%</div>
          <div class="pt bg-success text-white">Sale</div>
        </div>
        <div class="product-image d-flex justify-content-center position-relative" style="width: 100%;">
          <img src="${productItem.images}" height="200px" width="190px" alt="" style="cursor: pointer;">
          <div class="shot_cut_icons position-absolute justify-content-center gap-3"
            style="width: 100%; height: max-content;">
            <div class="sc-icons" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Quick view"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="14" height="14"
                fill="currentColor" class="bi bi-eye">
                <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z">
                </path>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path>
              </svg></div>
            <div class="sc-icons" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Add to Wishlist"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="14" height="14"
                fill="currentColor" class="bi bi-heart">
                <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15">
                </path>
              </svg></div>
            <div class="sc-icons" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Compare"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="14" height="14"
                fill="currentColor" class="bi bi-arrow-left-right">
                <path fill-rule="evenodd"
                  d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5">
                </path>
              </svg></div>
          </div>
        </div>
        <div class="s-icons product-catagory">
          <p class="mb-1">${productItem.tags.join(" & ")}</p>
        </div>
        <div class="product-name">
          <h4 class="mb-1 mt-2">${productItem.title}</h4>
        </div>
        <div class="product-rating d-flex justify-content-between">
          <div class="stars">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12"
              class="bi bi-star-fill">
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
              </path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12"
              class="bi bi-star-fill">
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
              </path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12"
              class="bi bi-star-fill">
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
              </path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12"
              class="bi bi-star-fill">
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
              </path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="5" viewBox="0 0 16 16" width="12" height="12"
              class="bi bi-star-fill">
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
              </path>
            </svg>
          </div>
          <div class="point">(<span id="R_point${productItem.id}">${finalRating}</span>)</div>
        </div>
         <div class="stok-status">
          <p>${productItem.availabilityStatus}</p>
        </div>
        <div class="p-bottom-section d-flex align-items-center justify-content-between mt-3">
        <div class="price"> <strong>$${productItem.price}</strong> <span class="old-price"> $25.5</span></div>
          <div class="add-tocart-button">
            <button onclick="addToCart(this)" style="border-radius: 4px;" class="px-3 py-1 text-white">+Add</button>
          </div>
        </div>
      </div>
          
          ` 
        }).join("")}
        
        `
      }
      addProduct_from_api();


      // script fot bootstrap tooltip
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
      const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

      // product rating functionality adding
      let productStartRating = document.querySelectorAll(".point");
      let select_product_star = document.querySelector(".stars");
      
      
      // product rating functionality adding
      for(let pt = 0; pt<productStartRating.length; pt++){
        //  console.log(productStartRating[pt].id);
         let pd_rating_point_id = document.getElementById(productStartRating[pt].firstElementChild.id);
         let rt_point_text = pd_rating_point_id.innerText;
         let star_rating_icons_parent = pd_rating_point_id.parentElement.parentElement.firstElementChild;

        
              let new_star = document.createElement("span");
              new_star.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor" class="bi bi-star-half text-warning" style="fill: #ffa534;"><path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"></path></svg>`
         


        //  if(rt_point_text = 4){
        //       star_rating_icons_parent.children[0].style.fill = "#ffa534";
        //       star_rating_icons_parent.children[1].style.fill = "#ffa534";
        //       star_rating_icons_parent.children[2].style.fill = "#ffa534";
        //       star_rating_icons_parent.children[3].style.fill = "#ffa534";
        //  }
        //  if(rt_point_text = 3){
        //       star_rating_icons_parent.children[0].style.fill = "#ffa534";
        //       star_rating_icons_parent.children[1].style.fill = "#ffa534";
        //       star_rating_icons_parent.children[2].style.fill = "#ffa534";
        //  }
        //  if(rt_point_text = 2){
        //       star_rating_icons_parent.children[0].style.fill = "#ffa534";
        //       star_rating_icons_parent.children[1].style.fill = "#ffa534";
        //  }
        //  if(rt_point_text = 1){
        //       star_rating_icons_parent.children[0].style.fill = "#ffa534";
        //  }
         
        if(rt_point_text == 5){
              star_rating_icons_parent.children[0].style.fill = "#ffa534";
              star_rating_icons_parent.children[1].style.fill = "#ffa534";
              star_rating_icons_parent.children[2].style.fill = "#ffa534";
              star_rating_icons_parent.children[3].style.fill = "#ffa534";
              star_rating_icons_parent.children[4].style.fill = "#ffa534";
        }
        else if(rt_point_text == 4){
             star_rating_icons_parent.children[0].style.fill = "#ffa534";
              star_rating_icons_parent.children[1].style.fill = "#ffa534";
              star_rating_icons_parent.children[2].style.fill = "#ffa534";
              star_rating_icons_parent.children[3].style.fill = "#ffa534";
        }else if(rt_point_text == 3){
              star_rating_icons_parent.children[0].style.fill = "#ffa534";
              star_rating_icons_parent.children[1].style.fill = "#ffa534";
              star_rating_icons_parent.children[2].style.fill = "#ffa534";
        }else if(rt_point_text == 2){
              star_rating_icons_parent.children[0].style.fill = "#ffa534";
              star_rating_icons_parent.children[1].style.fill = "#ffa534";
        }else if(rt_point_text == 1){
              star_rating_icons_parent.children[0].style.fill = "#ffa534";
        }
        else if(rt_point_text >= 4.1){
            console.log("4 star is found");
            console.log(star_rating_icons_parent);
              star_rating_icons_parent.children[0].style.fill = "#ffa534";
              star_rating_icons_parent.children[1].style.fill = "#ffa534";
              star_rating_icons_parent.children[2].style.fill = "#ffa534";
              star_rating_icons_parent.children[3].style.fill = "#ffa534";
              let old_star = star_rating_icons_parent.children[4];
              star_rating_icons_parent.replaceChild(new_star,old_star);
         }
         else if(rt_point_text >= 3){
              star_rating_icons_parent.children[0].style.fill = "#ffa534";
              star_rating_icons_parent.children[1].style.fill = "#ffa534";
              star_rating_icons_parent.children[2].style.fill = "#ffa534";
              let old_star = star_rating_icons_parent.children[3];
              star_rating_icons_parent.replaceChild(new_star,old_star);
         }
         else if(rt_point_text = 2){
              star_rating_icons_parent.children[0].style.fill = "#ffa534";
              star_rating_icons_parent.children[1].style.fill = "#ffa534";
              star_rating_icons_parent.replaceChild(new_star,star_rating_icons_parent.children[2])
              
          }
          else if(rt_point_text >= 1){
              star_rating_icons_parent.children[0].style.fill = "#ffa534";
              star_rating_icons_parent.replaceChild(new_star,star_rating_icons_parent.children[1])
            }
            else{
               star_rating_icons_parent.children[0].style.fill = "#a7a7a7";
               star_rating_icons_parent.children[1].style.fill = "#a7a7a7";
               star_rating_icons_parent.children[2].style.fill = "#a7a7a7";
               star_rating_icons_parent.children[3].style.fill = "#a7a7a7";
               star_rating_icons_parent.children[4].style.fill = "#a7a7a7";
            }
          // console.log(rt_point_text);
        }



        
      })
      
      // add to cart functionality

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let cart_container = document.querySelector(".cart-paroduct-container");
      
      function save_display_Cart_product_local_storage(){
        cart_container.innerHTML = "";
        let product_price_total = 0;

        cart.forEach(cartItem =>{
          const carttItem_list = document.createElement("div");
          carttItem_list.innerHTML = `
              <div class="cart-product d-flex justify-content-around gap-1 align-items-center" style="width: 100%;">
          <div class="c-tab-left d-flex justify-content-start gap-2">
            <div class="cart-product-image"><img
                src="${cartItem.p_image}" height="80" width="80"
                alt=""></div>
            <div class="cart-product-details">
              <strong class="cart-product-name">${cartItem.p_name} ${cartItem}</strong>
              <p class="mb-0" style="color: rgb(156, 156, 156);">200g</p>
              <button class="cart-product-remove-btn" onclick="removeCartItem(this,${cartItem.index_num})">
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-success"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                  Remove
              </button>
            </div>
          </div>
          <div class="c-tab-right d-flex justify-content-around">
            <div class="cart-product-quantiti d-flex justify-content-center align-items-center">
              <button class="cart_p_Quantiti_plus_btn p_m_btn">+</button>
              <input type="number" class="cart_product_Q_number" value="${cartItem.p_Quantity}" disabled>
              <button class="cart_p_Quantiti_plus_minus p_m_btn">-</button>
            </div>
            <div class="cart-product-total-price"><strong>$${cartItem.p_price * cartItem.p_Quantity}</strong></div>
          </div>
        </div>
          `;
          cart_container.appendChild(carttItem_list);
            let cart_items_length = document.querySelector(".cart_items_length");
            cart_items_length.innerText = cartItem.index_num + 1;
          
        })
        updatelocalStorage();
      }

      function updatelocalStorage(){
          localStorage.setItem("cart",JSON.stringify(cart));
      }

      
      function removeCartItem(x){
        let rm_cd_i = x.parentElement.parentElement.parentElement.parentElement;
        rm_cd_i.remove();
        cart.splice(x,1);
        updatelocalStorage();
      }

      function addToCart(button){
        // added to cart notification
         let vew_cart_notification_panel = document.querySelector(".vew-cart-notification");
         let all_noti_length = document.querySelectorAll(".nt-card");
         let v_noti_new_element = document.createElement("div");
         v_noti_new_element.classList.add("view-cart-noti-card");
         v_noti_new_element.innerHTML = `
            <div class="mb-0 d-flex justify-content-center align-items-center nt-card"> 
        <div class="checkMark_v_c_notis d-flex justify-content-center align-items-center">
          <i class="fa-solid fa-check"></i>
        </div>
        <p class="mb-1 fs-5" style="font-weight: 400;">add to cart Successful</p>
      </div>
       <button data-bs-toggle="offcanvas" data-bs-target="#cart_tab" aria-controls="cart_tab">Vew cart</button>
         `;
         vew_cart_notification_panel.appendChild(v_noti_new_element);
         setTimeout(()=>{
           v_noti_new_element.style.transform = "scale(1)";
           vew_cart_notification_panel.style.height = "fit-content";
          },50);
          setTimeout(()=>{
            v_noti_new_element.style.transform = "scale(0)";
            vew_cart_notification_panel.style.height = "0";
          },4000);

          // end notification section
          // main section
          console.log(button.parentElement.parentElement.parentElement.id);
          let product_name = button.parentElement.parentElement.parentElement.children[3].firstElementChild.innerText;
          let product_price = button.parentElement.parentElement.firstElementChild.firstElementChild.innerText;
          let product_image = button.parentElement.parentElement.parentElement.children[1].firstElementChild.src;


          let existing_product = cart.find(item => item.p_name === product_name);

          let cd_length = cart.length;
          if(existing_product){
            existing_product.p_Quantity++;
          }else{
            cart.push({
              index_num: cd_length,
              p_name: product_name,
              p_image: product_image,
              p_price: product_price,
              p_Quantity: 1
            })
          }

          save_display_Cart_product_local_storage();
        }
        save_display_Cart_product_local_storage();