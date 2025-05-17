import { unstable_ViewTransition as ViewTransition } from 'react';

export function NameTransition() {
  return (
    <ViewTransition>
      <h1 className="font-medium pt-12">
        <span className="sr-only">Stroe Catalin</span>
        <span
          aria-hidden="true"
          className="block overflow-hidden group relative"
        >
          <span className="inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full whitespace-nowrap">
            {'Stroe Catalin'.split('').map((letter, index) => (
              <span
                key={index}
                className="inline-block transition-all duration-300 ease-linear opacity-100 group-hover:opacity-0 group-hover:translate-y-3"
                style={{ transitionDelay: `${index * 25}ms` }}
              >
                {letter === ' ' ? ' ' : letter}
              </span>
            ))}
          </span>
          <span className="inline-block absolute left-0 top-0 transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0">
            {'clugraphy'.split('').map((letter, index) => (
              <span
                key={index}
                className="inline-block transition-all duration-300 ease-linear opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0"
                style={{ transitionDelay: `${index * 25}ms` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </span>
      </h1>
    </ViewTransition>
  );
}
