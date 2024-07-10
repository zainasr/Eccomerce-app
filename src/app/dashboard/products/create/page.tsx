"use client";


import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, XIcon } from "lucide-react";
import Link from "next/link";

import { useState } from "react";

import Image from "next/image";
import UploadImages from "@/components/UploadImages";


export default function ProductCreateRoute() {
  

  
  return (
    <form  >
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/products">
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">New Product</h1>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>
            In this form you can create your product
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Label>Name</Label>
              <Input
                type="text"
                // key={fields.name.key}
                // name={fields.name.name}
                // defaultValue={fields.name.initialValue}
                className="w-full"
                placeholder="Product Name"
              />

              {/* <p className="text-red-500"></p> */}
            </div>

            <div className="flex flex-col gap-3">
              <Label>Description</Label>
              <Textarea
                // key={fields.description.key}
                // name={fields.description.name}
                // defaultValue={fields.description.initialValue}
                placeholder="Write your description right here..."
              />
              {/* <p className="text-red-500">{fields.description.errors}</p> */}
            </div>
            <div className="flex flex-col gap-3">
              <Label>Price</Label>
              <Input
                // key={fields.price.key}
                // name={fields.price.name}
                // defaultValue={fields.price.initialValue}
                type="number"
                placeholder="$55"
              />
              {/* <p className="text-red-500">{fields.price.errors}</p> */}
            </div>

            <div className="flex flex-col gap-3">
              <Label>Featured Product</Label>
              <Switch
                // key={fields.isFeatured.key}
                // name={fields.isFeatured.name}
                // defaultValue={fields.isFeatured.initialValue}
              />
              {/* <p className="text-red-500">{fields.isFeatured.errors}</p> */}
            </div>

            <div className="flex flex-col gap-3">
              <Label>Status</Label>
              <Select
                // key={fields.status.key}
                // name={fields.status.name}
                // defaultValue={fields.status.initialValue}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
              {/* <p className="text-red-500">{fields.status.errors}</p> */}
            </div>

            <div className="flex flex-col gap-3">
              <Label>Category</Label>
              <Select
                // key={fields.category.key}
                // name={fields.category.name}
                // defaultValue={fields.category.initialValue}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {/* {categories.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.title}
                    </SelectItem>
                  ))} */}
                </SelectContent>
              </Select>
              {/* <p className="text-red-500">{fields.category.errors}</p> */}
            </div>

            <div className="flex flex-col gap-3">
              <Label>Images</Label>
              <input
                type="hidden"
                // value={images}
                // key={fields.images.key}
                // name={fields.images.name}
                // defaultValue={fields.images.initialValue as any}
              />
              <UploadImages></UploadImages>
              
            
              

              {/* <p className="text-red-500">{fields.images.errors}</p> */}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          {/* <SubmitButton text="Create Product" /> */}
        </CardFooter>
      </Card>
    </form>
  );
}