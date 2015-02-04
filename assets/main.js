/*
*/

window.words = [
	// general
//	'Alignment',
//	'At the end of the day',
//	'Buzzword',
//	'Countless',
//	'Disruptive innovation',
//	'Diversity',
//	'Empowerment',
//	'Face time',
//	'Going forward',
	'Grow',
//	'Impact',
//	'Leverage',
	'Milestone',
//	'Moving forward',
//	'Outside the box',
//	'Paradigm',
//	'Proactive',
//	'Reach out',
//	'Robust',
//	'Spin-up',
	'Streamline',
	'Synergy',
//	'Touch base',
//	'Wellness',

	// business
	'Analytics',
	'Bandwidth',
	'Best practices',
	'Boil the ocean',
//	'Buzzword compliant',
	'Cloud computing',
//	'Come-to-Jesus moment',
//	'Content marketing',
//	'Customer-centric',
//	'Drinking the Kool-Aid',
//	'Eating your own dogfood',
//	'Entitlement',
//	'Enterprise',
//	'Free value',
//	'Granular',
//	'Herding cats',
//	'Hitting our numbers',
//	'Hyperlocal',
//	'Innovation',
//	'Knowledge Process Outsourcing',
	'Leverage',
//	'Logistics',
	'Low Hanging Fruit',
//	'Make it pop',
//	'Mindshare',
//	'Mission Critical',
//	'Management Visibility',
//	'New economy',
//	'Next generation',
//	'Quick-Win',
//	'Return on Investment',
//	'Share options',
//	'Shoot',
//	'Social Currency',
//	'Socialize',
//	'Solution',
//	'Storytelling',
	'Strategy',
//	'Visibility',

	// computer/tech
	'Agile',
	'Ajax',
//	'Algorithm',
	'Benchmarking',
	'Back-end',
//	'Beta',
//	'Big data',
//	'Bleeding edge',
//	'Cloud',
//	'Collaboration',
//	'Content management',
//	'Cross-platform',
//	'Datafication',
//	'Data mining',
//	'Data science',
	'DevOps',
//	'Digital Rights Management',
//	'Disruptive Technologies',
//	'Document management',
//	'Dot-bomb',
	'Engine',
	'Framework',
//	'Fuzzy logic',
	'HTML5',
//	'Internet of Things',
//	'Innovation',
	'Mobile',
//	'Modularity',
//	'Next Generation',
//	'PaaS',
//	'Real-time',
	'Responsive',
//	'SaaS',
	'Scalability',
//	'Social software',
//	'Spam',
//	'Sync-up',
//	'Tagging',
//	'Think outside the box',
	'User generated content',
//	'Virtualization',
//	'Web 2.0',
//	'Webinar',
//	'Web services',
//	'Wikiality',
	'Workflow',

	// moar
	'JVM',
	'HHVM',
	'Hack',
	'React',
	'Angular',
//	'Winning',
//	'Integrate',
//	'Employ',
	'Refactor',
	'Automagically',
	'Good Process&trade;',
//	'Systematic',
//	'In A Nutshell',
	'Sunsetting',
//	'Growth Hacking',
	'Asset',
	'Front-end',

	// specific
	'Basset Hounds',
	'Chris! Hey Chris!',
	'Winn-win'
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
		var word;

		for (var i = 0; i < 25; ++i) {
			word = window.words[ Math.floor(Math.random() * window.words.length) ];

			if (bingo.indexOf(word) !== -1) {
				--i;
				continue;
			}

			bingo.push(word);
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