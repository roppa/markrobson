const posts = [{
	title: 'New website',
	slug: 'new-website',
	intro: 'My new gallery website',
	publishDate: '26th July 2020',
	html: `
			<p>I decided to create my own gallery website. I have other blogs/web presences on other subjects, but it is best to keep things separate.</p>
			<p>My intention with this is to diary things I'm learning, things I'm building, experiments, thoughts, and whatever else.</p>
			<p>Some aloof artists say they don't look at other peoples art, which is fine. I find that <i>context</i> is most important and is hugely missing from life. How do we not know that in the formative years of the artists life they visited a myriad galleries and had access to libraries full of gems? Context see? My point is I will delineate what has inspired me, whom I think possess technical prowess, who is connected to the aesthetic realm, who are great communicators, and those who spread joy.</p>
		`
}
]

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '')
})

export default posts