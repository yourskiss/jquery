// JavaScript Document
(function($) {
			$(document).ready(function() {
				$('#sun')
					.sprite({fps: 3, no_of_frames: 4})
					.spRandom({top: 10, bottom: 10, left: 10, right: 10});
				$('#logo').click(function() {
					document.location.href = 'http://www.internialux.com/';
				});
			
				$('#bird')
					.sprite({fps: 0.4, no_of_frames: 4})
					.spRandom({top: 50, bottom: 200, left: 300, right: 120})
					.isDraggable()
					.activeOnClick()
					.active();
			    $('#bird2').sprite({fps: 60, no_of_frames: 41, maxRows : 6, isMultipleRowsAnimation:true})
				          .lockTo('#hill2', {
						'left': 543,
						'top': 110,
						'bg_img_width': 2220
					});
				$('#mari').sprite({fps: 2, no_of_frames: 3})
				          .lockTo('#hill2', {
						'left': 223,
						'top': 90,
						'bg_img_width': 2220
					});
				$('#facebookanima').sprite({fps: 2, no_of_frames: 1})
				          .lockTo('#hill2', {
						'left': 160,
						'top': 100,
						'bg_img_width': 2220
					});
				$('#facebookanima').click(function() {
					document.location.href = 'http://www.facebook.com/Internialux';
				});
				$('#twitteranima').sprite({fps: 2, no_of_frames: 1})
				          .lockTo('#hill2', {
						'left': 218,
						'top': 92,
						'bg_img_width': 2220
					});
				$('#twitteranima').click(function() {
					document.location.href = 'http://twitter.com/internialux';
				});
				$('#webanima').sprite({fps: 2, no_of_frames: 1})
				          .lockTo('#hill2', {
						'left': 48,
						'top': 92,
						'bg_img_width': 2220
					});
				$('#webanima').click(function() {
					document.location.href = 'http://www.internialux.com/diseño-web-exclusivo.html';
				});
				$('#piruli').sprite({fps: 3, no_of_frames: 4})
				          .lockTo('#hill2', {
						'left': 1304,
						'top': 0,
						'bg_img_width': 2220
					});
			    $('#piruli').click(function() {
					document.location.href = 'http://www.internialux.com/desarrolo-web-tiendas-on-line.html';
				});
				$('#clouds').sprite({fps: 30, no_of_frames: 1})
				          .lockTo('#hill1', {
						'left': 123,
						'top': 40,
						'bg_img_width': 1000
					});
			    $('#clouds').click(function() {
					document.location.href = 'http://www.internialux.com/posicionamiento-web-seo.html';
				});
				$('#clouds1').sprite({fps: 30, no_of_frames: 1})
				          .lockTo('#hill1', {
						'left': 323,
						'top': 40,
						'bg_img_width': 1000
					});
			    $('#clouds1').click(function() {
					document.location.href = 'http://www.internialux.com/consultaria-web-asesoramiento-gratuito.html';
				});
				$('#clouds2').sprite({fps: 30, no_of_frames: 1})
				          .lockTo('#hill1', {
						'left': 623,
						'top': 40,
						'bg_img_width': 1000
					});
			    $('#clouds2').click(function() {
					document.location.href = 'http://www.internialux.com/desarrolo-web-tiendas-on-line.html';
				});
				$('#clouds3').sprite({fps: 30, no_of_frames: 1})
				          .lockTo('#hill1', {
						'left': 923,
						'top': 40,
						'bg_img_width': 1000
					});
			    $('#clouds3').click(function() {
					document.location.href = 'http://www.internialux.com/desarrolo-web-tiendas-on-line.html';
				});
				$('#hill2').pan({fps: 30, speed: 2, dir: 'left', depth: 30});
				$('#hill1').pan({fps: 30, speed: 3, dir: 'left', depth: 10});
				$('#hill1, #hill2, #clouds, #clouds1').spRelSpeed(5);
				
				
				window.actions = {
					fly_slowly_forwards: function() {
						$('#bird')
							.fps(10)
							.spState(1);
						$('#hill1, #hill2, #clouds, #clouds1')
							.spRelSpeed(10)
							.spChangeDir('left');
					},
					fly_slowly_backwards: function() {
						$('#bird')
							.fps(10)
							.spState(2);
						$('#hill1, #hill2, #clouds, #clouds1')
							.spRelSpeed(10)
							.spChangeDir('right');
					},
					fly_quickly_forwards: function() {
						$('#bird')
							.fps(20)
							.spState(1);
						$('#hill1, #hill2, #clouds, #clouds1')
							.spRelSpeed(30)
							.spChangeDir('left');
					},
					fly_quickly_backwards: function() {
						$('#bird')
							.fps(20)
							.spState(2);
						$('#hill1, #hill2, #clouds, #clouds1')
							.spRelSpeed(30)
							.spChangeDir('right');
					},
					fly_like_lightning_forwards: function() {
						$('#bird')
							.fps(25)
							.spState(1);
						$('#hill1, #hill2, #clouds, #clouds1')
							.spSpeed(40)
							.spChangeDir('left');
					},
					fly_like_lightning_backwards: function() {
						$('#bird')
							.fps(25)
							.spState(2);
						$('#hill1, #hill2, #clouds, #clouds1')
							.spSpeed(40)
							.spChangeDir('right');
					}
				};
				
				window.page = {
					hide_panels: function() {
						$('.panel').hide(300);
					},
					show_panel: function(el_id) {
						this.hide_panels();
						$(el_id).show(300);
					}
				}
				
			});
		})(jQuery);
	