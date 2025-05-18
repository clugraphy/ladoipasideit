interface BlogTitleProps {
    children: React.ReactNode;
}

interface BlogDateProps {
    children: React.ReactNode;
}

interface BlogAuthorProps {
    children: React.ReactNode;
}

interface BlogTagsProps {
    tags: string[];
}

export function BlogTitle({ children }: BlogTitleProps) {
    return (
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {children}
        </h1>
    );
}

export function BlogDate({ children }: BlogDateProps) {
    return (
        <time className="text-sm text-gray-600 dark:text-gray-400">
            {children}
        </time>
    );
}

export function BlogAuthor({ children }: BlogAuthorProps) {
    return (
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {children}
        </span>
    );
}

export function BlogTags({ tags }: BlogTagsProps) {
    return (
        <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}

export function BlogMeta({ title, author, date, tags }: {
    title: string;
    author: string;
    date: string;
    tags: string[];
}) {
    return (
        <div className="space-y-4 mb-8">
            <BlogTitle>{title}</BlogTitle>
            <div className="flex items-center space-x-2">
                <BlogAuthor>{author}</BlogAuthor>
                <span className="text-gray-400">•</span>
                <BlogDate>{date}</BlogDate>
            </div>
            <BlogTags tags={tags} />
        </div>
    );
} 