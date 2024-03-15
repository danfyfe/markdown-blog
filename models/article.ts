import mongoose, { Schema } from "mongoose";

class Article {
  title: string
  description: string
  markdown: string
  createdAt: Date

  constructor(title: string, description: string, markdown: string, createdAt = new Date()) {
    this.title = title
    this.description = description
    this.markdown = markdown
    this.createdAt = createdAt
  }
}

const articleSchema = new Schema<Article>({
  title: {
    required: true,
    type: String
  },
  description: {
    type: String
  },
  markdown: {
    required: true,
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Article', articleSchema)