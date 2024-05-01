import mongoose from "mongoose";

const productCateorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timeStamps: true });

export const ProductCategory = mongoose.model('ProductCategory', productCateorySchema);
