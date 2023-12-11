class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `   
        <nav id="mainNav">
        <div class="logo">
            <a href="#">
                <img id="headerLogo" src="media/homepageMedia/Logo-Black.png">
            </a>
        </div>
        <ul>
            <li>
                <a href="/html/timeline.html">timeline</a></li>
    
            <li>
                <a href="/html/biography.html">biography</a></li>
    
                <!-- <li <a href="/index.html">Home></a></li> -->
                <li>
                    <a href="/index.html">Home</a>
                </li>
        </ul>
        </nav>
        <style>
        *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        #mainNav .logo img{
            height: 80px;
            transition: height 0.4s;
            padding: 10px;
        }
        
        #mainNav{
            display: flex;
            justify-content: space-between;
            padding: 0px 16px;
            position: fixed;
            width: 100%;
            top: 0px;
            background-color: blue;
            transition: background 0.4s;
            font-family: 'Beatle-Font', serif;
            z-index: 2;
            animation-name: slideInScreen;
            animation-duration: 3.3s; 
        }
        
        #mainNav ul{
            list-style: none;
            display: flex;
            align-items: center;
            width: 400px;
            justify-content: space-around;
        }
        
        #mainNav ul li a{
            text-decoration: none !important;
            color: rgb(51, 51, 51);
            font-weight: 500;
            transition: color 0.4s;
        }
        
        .bg-black{
            background-color: #1b1b1b !important;
        }
        
        .txt-white a{
            color: #f6f6e8 !important;
        }
        

        `
    }

}

customElements.define('header-component', Header)