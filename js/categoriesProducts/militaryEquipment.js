class MilitaryEquipment extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <script src="../product.js"></script>
        <div class="contributionTypeButton" onclick = "organizationFunction()">
            <img class="pictures" src="../../media/militaryEquipment.jpeg">
            <p class="productsNames">ציוד צבאי</p>
        </div>

        <style>
        
        .productsNames{
            width: 150px;
            height: 30px;
            background-color: #F2B900;
            font-family: 'Rubik', sans-serif;
            font-size: 24px;
            text-align: center;
            left: 20px;
            margin-left: auto;
            margin-right: auto;
            color: #01587A;
        }
        
        .pictures{
            width: 150px;
            height: 149px;
            border-radius: 10px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 10px;
        }
        
        .contributionTypeButton{
            display: flex;
            flex-direction: column;
            width: 180px;
            height: 200px;
            background-color: #F2B900;
            border-radius: 10px;
            box-shadow: 8px 8px #00425c;
            transition: background-color 0.7s;
        }

        .contributionTypeButton:hover{
            cursor: pointer;
        }

        
        </style>
        `}}

customElements.define('military-equipment-button', MilitaryEquipment)