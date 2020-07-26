const posts = [{
	title: 'New website',
	slug: 'new-website',
	intro: 'My new gallery website',
	publishDate: '26th July 2020',
	html: `
			<p>I decided to create my own gallery webiste. I have other blogs/web presences, but it is best to keep things separate.</p>
			<p>My intention with this is to diary things I'm learning, things I'm building, experiments, thoughts, and whatever else.</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>
		`
}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;