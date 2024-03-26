import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import SelectAddProduct from "./SelectAddProduct";

function FormAddProduct() {
  return (
    <form>
      <FormRow label="SKU">
        <Input type="text" id="sku" />
      </FormRow>
      <FormRow label="NAME">
        <Input type="text" id="name" />
      </FormRow>
      <FormRow label="Price">
        <Input type="text" id="price" />
      </FormRow>
      <SelectAddProduct />
    </form>
  );
}

export default FormAddProduct;
