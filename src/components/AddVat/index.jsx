
const AddVAT = (props) => {
 
 const tot = (props.value * props.vat / 100) + props.value;
 return (
     <div>
         <p>Product: {props.value}</p>
         <p>VAT: {props.vat}%</p>
         <p>Tot: {tot}</p>
     </div>
 )
}

export default AddVAT;