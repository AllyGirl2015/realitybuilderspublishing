import Link from 'next/link';
import Image from 'next/image';
import { Author } from '@/lib/data';

interface AuthorCardProps {
  author: Author;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={author.imageUrl}
          alt={author.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
      </div>
      <div className="p-6 relative">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">{author.name}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3 text-sm">{author.bio}</p>
        <Link
          href={`/authors/${author.id}`}
          className="inline-block bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors text-sm font-medium"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
