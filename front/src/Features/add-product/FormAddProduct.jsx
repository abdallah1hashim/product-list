import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import styled from "styled-components";

const StyledSelect = styled.select`
  border-radius: 5px;
  padding: 5px;
`;

const P = styled.p`
  margin-top: 10px;
`;

function FormAddProduct({ register, type, setType, formState }) {
  const { errors } = formState;

  return (
    <>
      <FormRow label="NAME" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "Please, submit required data",
          })}
        />
      </FormRow>
      <FormRow label="SKU" error={errors?.sku?.message}>
        <Input
          type="text"
          id="sku"
          {...register("sku", {
            required: "Please, submit required data",
          })}
        />
      </FormRow>
      <FormRow label="Price" error={errors?.price?.message}>
        <Input
          type="text"
          id="price"
          {...register("price", {
            required: "Please, submit required data",
            validate: (value) =>
              isFinite(value) || "Please, provide the data of indicated type",
          })}
        />
      </FormRow>
      <FormRow>
        <StyledSelect
          required
          name="type"
          id="productType"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option disabled>chosse a type</option>
          {["Furniture", "Book", "DVD"].map((type, i) => (
            <option key={i} value={i + 1}>
              {type}
            </option>
          ))}
        </StyledSelect>
      </FormRow>
      {+type === 1 && (
        <>
          <FormRow label="Height" error={errors?.height?.message}>
            <Input
              type="number"
              id="height"
              {...register("height", {
                required: "Please, submit required data",
                validate: (value) =>
                  isFinite(value) ||
                  "Please, provide the data of indicated type",
              })}
            />
          </FormRow>
          <FormRow label="width" error={errors?.width?.message}>
            <Input
              type="number"
              id="width"
              {...register("width", {
                required: "Please, submit required data",
                validate: (value) =>
                  isFinite(value) ||
                  "Please, provide the data of indicated type",
              })}
            />
          </FormRow>
          <FormRow label="length" error={errors?.length?.message}>
            <Input
              type="number"
              id="length"
              {...register("length", {
                required: "Please, submit required data",
                validate: (value) =>
                  isFinite(value) ||
                  "Please, provide the data of indicated type",
              })}
            />
          </FormRow>

          <P>Please, provide dimensions</P>
        </>
      )}
      {+type === 2 && (
        <>
          <FormRow label="weight" error={errors?.weight?.message}>
            <Input
              type="number"
              id="weight"
              {...register("weight", {
                required: "Please, submit required data",
                validate: (value) =>
                  isFinite(value) ||
                  "Please, provide the data of indicated type",
              })}
            />
          </FormRow>

          <P>Please, provide weight</P>
        </>
      )}
      {+type === 3 && (
        <>
          <FormRow label="size" error={errors?.size?.message}>
            <Input
              type="number"
              id="size"
              {...register("size", {
                required: "Please, submit required data",
                validate: (value) =>
                  isFinite(value) ||
                  "Please, provide the data of indicated type",
              })}
            />
          </FormRow>

          <P>Please, provide weight</P>
        </>
      )}
    </>
  );
}

export default FormAddProduct;
