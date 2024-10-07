import { Schema, model, Document } from 'mongoose';

// Define the interface for the cache document
interface ICache extends Document {
  value: string;
  createdAt: Date;
}

// Create the cache schema with TTL index
const cacheSchema = new Schema<ICache>({
  value: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // TTL index to remove document after 24 hours
  },
});

// Create the cache model
const Cache = model<ICache>('Cache', cacheSchema);

export default Cache;
