export const TrustBadges = () => {
  return (
    <section className="py-16 px-4 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground uppercase tracking-wide font-semibold">
            Trusted & Featured On
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <a 
            href='https://www.saashub.com/ralvie-ai?utm_source=badge&utm_campaign=badge&utm_content=ralvie-ai&badge_variant=color&badge_kind=approved' 
            target='_blank'
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img 
              src="https://cdn-b.saashub.com/img/badges/approved-color.png?v=1" 
              alt="Ralvie AI - Approved on SaaSHub" 
              className="h-11 w-auto object-contain"
            />
          </a>

          <a 
            href="https://open-launch.com" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Powered by Open-Launch"
            className="transition-opacity hover:opacity-80"
          >
            <img 
              src="https://open-launch.com/images/badges/powered-by-light.svg" 
              alt="Powered by Open-Launch" 
              className="h-11 w-auto object-contain"
            />
          </a>

          <a 
            href="https://www.producthunt.com/products/ralvie-ai" 
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img 
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=996416&theme=light" 
              alt="Ralvie AI - Featured on Product Hunt" 
              className="h-11 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
