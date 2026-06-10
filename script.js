
const WHATSAPP_NUMBER="9647504340858";
function getLocation(){if(!navigator.geolocation){alert("GPS not supported on this device.");return;}navigator.geolocation.getCurrentPosition(pos=>{document.getElementById("location").value=`https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`},()=>alert("Location permission denied."))}
function sendOrder(e){e.preventDefault();const msg=`New Order - Omran Store
Name: ${document.getElementById("name").value}
Phone: ${document.getElementById("phone").value}
Item: ${document.getElementById("itemCode").value}
Details: ${document.getElementById("details").value}
Address: ${document.getElementById("address").value}
Location: ${document.getElementById("location").value}
Note: ${document.getElementById("note").value}`;window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank")}
function fillOrder(code,name){localStorage.setItem("omran_order_item",code+" - "+name);location.href="order.html"}
function loadOrderItem(){const v=localStorage.getItem("omran_order_item");if(v&&document.getElementById("itemCode"))document.getElementById("itemCode").value=v}
function trackOrder(){const code=document.getElementById("trackInput")?.value.trim();const current=code?2:0;const steps=[["Create request order","Your order request has been received"],["Confirmed order","Shop confirmed your order"],["Preparing order","Item is being prepared"],["To delivery department","Order moved to delivery"],["In the way for you","Courier is coming"],["Delivered order","Order delivered successfully"]];const el=document.getElementById("trackSteps");if(el)el.innerHTML=steps.map((s,i)=>`<div class="step ${i<current?"done":i===current?"active-step":""}"><div class="dot">${i+1}</div><div><strong>${s[0]}</strong><span>${s[1]}</span></div></div>`).join("")}
function customerLogin(){document.getElementById("customerDashboard").innerHTML=`<div class="info-box"><h3>Welcome Customer</h3><p><strong>Phone:</strong> ${document.getElementById("customerPhone").value||"Not entered"}</p><p><strong>Order Code:</strong> ${document.getElementById("customerCode").value||"Not entered"}</p><p style="margin-top:8px">Your orders, favorites and saved addresses appear here after database connection.</p></div>`}
function adminLogin(){const u=document.getElementById("adminUser").value.trim();const p=document.getElementById("adminPass").value.trim();if(u==="admin"&&p==="1234"){document.getElementById("adminPanel").style.display="block";alert("Login success. Demo mode only.")}else alert("Wrong username or password.")}
