"use client";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const fuelType = [
  { label: "BMW", value: "BMW" },
  { label: "Audi", value: "Audi" },
  { label: "Mercedes", value: "Mercedes" },
  { label: "Toyota", value: "Toyota" },
  { label: "Honda", value: "Honda" },
  { label: "Ford", value: "Ford" },
  { label: "Nissan", value: "Nissan" },
  { label: "Hyundai", value: "Hyundai" },
  { label: "Kia", value: "Kia" },
  { label: "Tesla", value: "Tesla" },
];

const conditions = [
  { label: "New", value: "New" },
  { label: "Used", value: "Used" },
];

const brands = [
  { label: "BMW", value: "BMW" },
  { label: "Audi", value: "Audi" },
  { label: "Mercedes", value: "Mercedes" },
  { label: "Toyota", value: "Toyota" },
  { label: "Honda", value: "Honda" },
  { label: "Ford", value: "Ford" },
  { label: "Nissan", value: "Nissan" },
  { label: "Hyundai", value: "Hyundai" },
  { label: "Kia", value: "Kia" },
  { label: "Tesla", value: "Tesla" },
];

const AddCarForm = ({onClose}: any) => {
  const [state, formAction] = useFormState(()=>{}, null);

  useEffect(()=>{

  },[state])


  return (
    <div className="m-3">
      <form action={formAction}>
        <Input
          required
          name="name"
          type="text"
          label="Name"
          variant="bordered"
        />
        <Select
          required
          name="brand"
          variant="bordered"
          label="Select an Brand"
        >
          {brands.map((brand) => (
            <SelectItem key={brand.value} value={brand.value}>
              {brand.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          required
          name="fuelType"
          variant="bordered"
          label="Select fuel Type"
        >
          {fuelType.map((fuel) => (
            <SelectItem key={fuel.value} value={fuel.value}>
              {fuel.label}
            </SelectItem>
          ))}
        </Select>
        <Select required name="condition" variant="bordered" label="condition">
          {conditions?.map((condition) => (
            <SelectItem key={condition.value} value={condition.value}>
              {condition.label}
            </SelectItem>
          ))}
        </Select>

        <Input
          required
          name="model"
          type="text"
          label="Model"
          variant="bordered"
        />
        <Input
          required
          name="image"
          type="link"
          label="image"
          variant="bordered"
        />
        <Input
          required
          name="rating"
          type="number"
          label="rating"
          variant="bordered"
        />
        <Input
          required
          name="passengerCapacity"
          type="number"
          label="passenger Capacity"
          variant="bordered"
        />
        <Input
          required
          name="color"
          type="text"
          label="color"
          variant="bordered"
        />

        <Button variant="faded">Create Car</Button>
      </form>
    </div>
  );
};

export default AddCarForm;
