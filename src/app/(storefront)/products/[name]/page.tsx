

import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import prisma from "@/lib/db";
import { ProductCard } from "@/components/ProductCard";
import { Prisma } from "@prisma/client";

async function getData(productFor: string,categoryType?: string | string[] | null,min?:string,max?:string) {
  

  const whereClause = {
    status: "published",
  } as {
    status: string;
    categoryType?: string;
    price?: { gte?: number; lte?: number };
    
  };
  if (categoryType) {
    whereClause.categoryType = categoryType as string;
  }

  if (min && !max) {
    whereClause.price = {
      gte: parseInt(min),
    };
  }

  if (!min && max) {
    whereClause.price = {
      lte: parseInt(max),
    };
  }

  if (min && max) {
    whereClause.price = {
      gte: parseInt(min),
      lte: parseInt(max),
    };
  }


  
  switch (productFor) {

    

    case "all": {
      const whereAll={
        ...whereClause,
      } as Prisma.ProductWhereInput 
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
        where:whereAll,
      });

      return {
        title: "All Products",
        data: data,
      };
    }
    case "men": {
     const whereMen={
      
      category: "men",
      ...whereClause,

    } as Prisma.ProductWhereInput ;
       
      const data = await prisma.product.findMany({
        where:whereMen,
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Products for Men",
        data: data,
      };
    }
    case "women": {

      const whereWomen={
      
        category: "women",
        ...whereClause,
  
      } as Prisma.ProductWhereInput 
      
      const data = await prisma.product.findMany({
        where:whereWomen,
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Products to Women",
        data: data,
      };
    }
    case "kids": {
      const whereKids={
      
        category: "kids",
        ...whereClause,
  
      } as Prisma.ProductWhereInput 

      const data = await prisma.product.findMany({
        where: whereKids,  
        
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Products for Kids",
        data: data,
      };
    }
    default: {
      return notFound();
    }
  }
}

export default async function CategoriesPage({
  params,
  searchParams,
}: {
  params: { name: string },
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  noStore();
  const category = searchParams.category || null;
  const min = searchParams.min || null;
  const max = searchParams.max || null;
  const { data, title } = await getData(params.name, category,min as string,max as string); 
  
  return (
    <section>
      <h1 className="font-semibold text-3xl my-5">{title}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}