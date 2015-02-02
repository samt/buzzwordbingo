/*
*/

window.words = [
	'Alignment',
	'At the end of the day',
	'Buzzword',
	'Clear goal',
	'Countless',
	'Disruptive innovation',
	'Diversity',
	'Empowerment',
	'Face time',
	'Going forward',
	'Grow',
	'Impact',
	'Leverage',
	'Milestone',
	'Moving forward',
	'Outside the box',
	'Paradigm',
	'Proactive',
	'Reach out',
	'Relaying',
	'Robust',
	'Sea change',
	'Spin-up',
	'Streamline',
	'Synergy',
	'Touch base',
	'Wellness',
	'Win-win',
	'Analytics',
	'Ballpark figure',
	'Bandwidth',
	'Best of Breed',
	'Best practices',
	'Boil the ocean',
	'Brand',
	'Brick-and-mortar',
	'Buzzword compliant',
	'Cloud computing',
	'Close the loop',
	'Come-to-Jesus moment',
	'Content marketing',
	'Core competency',
	'Customer-centric',
	'Drinking the Kool-Aid',
	'Eating your own dogfood',
	'Enable',
	'Entitlement',
	'Enterprise',
	'Eyeballs',
	'Free value',
	'Generation Y',
	'Granular',
	'Herding cats',
	'Hitting our numbers',
	'Hyperlocal',
	'Innovation',
	'Knowledge Process Outsourcing',
	'Leverage',
	'Logistics',
	'Low Hanging Fruit',
	'Make it pop',
	'Mindshare',
	'Mission Critical',
	'Management Visibility',
	'New economy',
	'Next generation',
	'Offshoring',
	'Quick-win',
	'Return on Investment',
	'Reverse fulfilment',
	'Rightshoring',
	'Seamless',
	'Share options',
	'Shoot',
	'Social Currency',
	'Socialize',
	'Solution',
	'Storytelling',
	'Startup',
	'Strategy',
	'Touchpoint',
	'Value-added',
	'Visibility',
	'4G',
	'Aggregator',
	'Agile',
	'Ajax',
	'Algorithm',
	'Benchmarking',
	'Back-end',
	'Beta',
	'Big data',
	'Bleeding edge',
	'Blog',
	'Cloud',
	'Collaboration',
	'Content management',
	'Cross-platform',
	'Datafication',
	'Data mining',
	'Data science',
	'DevOps',
	'Digital Rights Management',
	'Disruptive Technologies',
	'Document management',
	'Dot-bomb',
	'Engine',
	'Framework',
	'Fuzzy logic',
	'HTML5',
	'Internet of Things',
	'Innovation',
	'Mobile',
	'Modularity',
	'Nanotechnology',
	'Netiquette',
	'Next Generation',
	'Pandering',
	'PaaS',
	'Real-time',
	'Responsive',
	'SaaS',
	'Scalability',
	'Social bookmarking',
	'Social software',
	'Spam',
	'Sync-up',
	'Tagging',
	'Think outside the box',
	'User generated content',
	'Virtualization',
	'Web 2.0',
	'Webinar',
	'Weblog',
	'Web services',
	'Wikiality',
	'Workflow',
	// moar
	'Creative',
	'Autodesk',
	'PHP',
	'JavaScript',
	'JVM',
	'HHVM',
	'Hack',
	'Facebook',
	'Chris! Hey Chris!',
	'React',
	'Angular',
	'Node.js',
	'NPM',
	'Winning',
	'AWS'
];

$(function () {

	$('.game td').on('click', function () {
		$this = $(this);

		if ($this.hasClass('free')) return;

		if ($this.hasClass('marked'))
			$this.removeClass('marked');
		else
			$this.addClass('marked');
	});

	$('.reset').on('click', function () {
		$(this).parent().parent().parent().find('td').removeClass('marked');
		$('.free').addClass('marked');
	});

	$('.restart').on('click', function () {
		var bingo = [];

		for (var i = 0; i < 25; i++) {
			bingo.push(window.words[ Math.floor(Math.random() * window.words.length) ]);
		}

		$('.game').find('td').each(function (i, val) {
			var $el = $(val);
			if ($el.hasClass('free')) return;
			$el.html(bingo[i]);
		});

		$('.reset').click();
	});

	$('.restart').click();
});