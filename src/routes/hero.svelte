<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="cols cols-hero">
	<div class="col col-content">
		<h1>Arvostaja</h1>
		<div class="description">
			<p><strong>Tervetuloa! 👋</strong></p>
			<p>Liity mukaan ja kehity kanssani sijoittajana elämänmittaisella matkalla.</p>
		</div>
		<div class="thesis">
			<ol>
				{#each ['Osta laadukkaita yhtiöitä.', 'Älä maksa niistä liikaa.', 'Älä tee mitään.'] as item, index}
					<li in:fly|global={{ delay: 100 + index * 250, x: -30, y: 0 }}>{item}</li>
				{/each}
			</ol>
			<em>— Terry Smith, Fundsmith</em>
		</div>
		<div class="buttons">
			<Button size="lg" variant="primary" href={`${$page.url.origin}/artikkelit`}>
				Artikkelit
			</Button>
			<Button size="lg" variant="white" href={`${$page.url.origin}/salkku`}>Avaa salkku</Button>
		</div>
	</div>
	<div class="col col-image">
		<svg
			id="svg8"
			height="512"
			viewBox="0 0 135.46666 135.46666"
			width="512"
			xmlns="http://www.w3.org/2000/svg"
			><clipPath id="clipPath5136"
				><rect
					id="rect5138"
					height="89.013"
					rx="7.858"
					width="87.501"
					x="-68.036"
					y="22.301"
				/></clipPath
			><clipPath id="clipPath3786"
				><path
					id="rect3788"
					d="m84.667 15.119h79.375v72.571h-79.375z"
					paint-order="fill markers stroke"
				/></clipPath
			><g id="layer1"
				><g id="g4582" transform="matrix(1.02 0 0 1.02 -11.216 .017)"
					><g id="g12547"
						><g id="g10526"
							><g id="g10391" transform="translate(1.723)"
								><g stroke-linecap="round" stroke-linejoin="round"
									><path
										id="path10342"
										d="m87.617588 25.675007-1.146773 33.224662c-.09602 5.046397 5.722402 12.664454 9.076149 11.155984l33.137436-15.070557c5.93127-1.694647 6.35105-9.971397 3.58879-14.750921-8.40473-14.54268-22.60031-18.247801-40.819809-18.247801-3.910689 0-3.835793 3.688633-3.835793 3.688633z"
										fill="#171d8f"
										stroke-width="1.674"
										paint-order="stroke fill markers"
									/><path
										id="path10330"
										d="m70.268474 42.555788c-22.837952 3.044194-40.140905 20.427124-40.535621 41.753988-.479494 25.907504 20.975206 42.796874 47.081822 42.236654 25.995075-.55783 45.381555-18.95996 47.081805-42.236654.29862-4.088204.014-8.035065-1.0823-11.70546-1.72265-5.767399-9.99225-2.767185-9.99225-2.767185l-29.511952 11.751032c-3.356387 1.404835-6.804369 1.481101-6.989252-3.600719l-.77978-31.993661s-.253647-4.106983-5.272472-3.437995z"
										fill="#ffac17"
										stroke-width="1.459"
										paint-order="stroke fill markers"
									/><path
										id="path10320"
										d="m70.268474 34.575208c-22.837952 3.044193-40.140905 20.427125-40.535621 41.753987-.479494 25.907525 20.975206 42.796905 47.081822 42.236685 25.995075-.55783 45.381555-18.959968 47.081805-42.236685.29862-4.088203.014-8.035063-1.0823-11.705459-1.72265-5.767398-9.99225-2.767185-9.99225-2.767185l-29.511952 11.751033c-3.356387 1.404834-6.804369 1.4811-6.989252-3.600719l-.77978-31.993663s-.253647-4.106981-5.272472-3.437994z"
										fill="#ffc517"
										stroke-width="1.459"
										paint-order="stroke fill markers"
									/><path
										id="path10325"
										d="m85.486212 18.378181.876249 40.075878c-.09602 5.046397 3.69938 5.813238 7.053127 4.304768l36.020602-15.987929s5.23469-2.76279 2.47484-7.543001c-8.39836-14.546362-24.36953-24.538349-42.589025-24.538349-3.910689 0-3.835793 3.688633-3.835793 3.688633z"
										fill="#7738c7"
										stroke-width="1.674"
										paint-order="stroke fill markers"
									/><path
										id="path10328"
										d="m80.018769 77.444974s-4.717913 2.358955-1.572639 7.076865c3.145274 4.717912 30.6664 34.598011 34.59799 35.646441 3.9316 1.04842 8.64951-.26211 12.05688-6.02844 3.40739-5.76634 6.55266-14.940054 5.76634-22.80324s-8.6495-8.125291-21.2306-11.00846c-12.581069-2.883166-26.210592-3.93159-29.617971-2.883166z"
										fill="#ff4b3d"
										stroke-width="1.961"
										paint-order="stroke fill markers"
									/><path
										id="path10344"
										d="m34.954804 6.470086a17.534336 17.534336 0 0 0 -17.468749 17.534105 17.534336 17.534336 0 0 0 9.192668 15.422897c.08966 2.613346.664829 7.19158 3.414038 9.988189 4.017439 4.086705 6.787942 3.948122 4.917756 1.177477-1.500935-2.223608-2.908122-6.720088-.07714-9.054458a17.534336 17.534336 0 0 0 .08678.000535 17.534336 17.534336 0 0 0 17.534643-17.53464 17.534336 17.534336 0 0 0 -17.534641-17.534105 17.534336 17.534336 0 0 0 -.06535 0z"
										fill="#ffc517"
										stroke-width="2.073"
										paint-order="stroke fill markers"
									/></g
								><path
									id="path12332-5"
									d="m36.381647 12.127031a1.2675885 1.2675885 0 0 0 -1.418413 1.096763l-.154324 1.209229c-.486466.140852-.977965.364475-1.457559.679048-1.188593.779577-1.938515 1.759331-2.223174 2.792211-.284609 1.032892-.102948 2.021822.208549 2.805394.588022 1.479205 1.633006 2.428763 1.752075 2.534186a1.2675885 1.2675885 0 0 0 .104925.09395s1.80974 1.457446 2.984551 3.05996c.587412.80126.958079 1.627804.989137 2.101361.03107.473558.03518.662591-.808797 1.090703-1.924447.976231-2.738559.505325-3.454616-.116654-.716044-.621979-1.073538-1.512528-1.073538-1.512528a1.2675885 1.2675885 0 0 0 -1.630665-.74828 1.2675885 1.2675885 0 0 0 -.747864 1.627423s.502343 1.429613 1.789335 2.54753c.357883.310872.798672.585452 1.30239.795531l-.148684 1.165044a1.2675885 1.2675885 0 0 0 1.097407 1.418502 1.2675885 1.2675885 0 0 0 1.417865-1.097497l.140393-1.100065c.768751-.06213 1.595055-.280875 2.455622-.717423 1.480381-.750971 2.27932-2.199373 2.192877-3.517186-.08642-1.317818-.746299-2.439186-1.477728-3.436881-1.397269-1.905962-3.227513-3.365764-3.393092-3.496426-.01266-.0124-.793613-.771614-1.134564-1.629273-.171843-.43234-.224384-.82384-.122286-1.194342.102081-.370508.361398-.815306 1.170936-1.34627.714381-.468554 1.14292-.493593 1.516925-.419875.374029.07375.762125.316725 1.125307.687746.726389.742037 1.181321 1.837311 1.181321 1.837311a1.2675885 1.2675885 0 0 0 1.63869.726852 1.2675885 1.2675885 0 0 0 .726281-1.639422s-.538389-1.477112-1.733778-2.698265c-.475824-.486075-1.085742-.953811-1.840021-1.229322l.121402-.951269a1.2675885 1.2675885 0 0 0 -1.09686-1.417769z"
									fill="#fff"
									vector-effect="none"
									paint-order="stroke fill markers"
								/><path
									id="path10378"
									d="m18.927632 30.966192a17.534337 17.534337 0 0 0 7.751091 8.460896c.08966 2.613346.664829 7.19158 3.414038 9.988189 4.017439 4.086705 6.787942 3.948122 4.917756 1.177477-1.500935-2.223608-2.908122-6.720088-.07714-9.054458a17.534337 17.534337 0 0 0 .08678.000535 17.534337 17.534337 0 0 0 6.926644-1.426043c-9.63782-.859081-17.26008-4.69336-23.019169-9.146596z"
									fill="#ffac17"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2.073"
									paint-order="stroke fill markers"
								/><path
									id="path10397"
									d="m302.37109 367.71094c36.19508 39.92452 87.36616 92.76507 97.54883 95.48047 15.15232 4.04059 33.33485-1.01104 46.4668-23.23438 6.75806-11.43669 13.24159-26.35336 17.53711-42.26758-6.08388 1.16624-13.06135 3.29086-21.06641 6.59571-43.97932 18.15658-100.02771-9.26861-140.48633-36.57422z"
									fill="#cf1531"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="7.559"
									transform="matrix(.259 0 0 .259 9.276 -.017)"
									paint-order="stroke fill markers"
								/></g
							></g
						></g
					></g
				></g
			></svg
		>
	</div>
</div>

<style lang="scss">
	.cols-hero {
		$breakpoint: 900px;

		display: grid;
		gap: 3rem;

		@media (min-width: $breakpoint) {
			gap: 10rem;
			grid-template-columns: 57fr 43fr;
		}

		@media (min-width: 1300px) {
			gap: 14rem;
		}

		.thesis {
			margin: 2.2rem 0;

			ol {
				padding: 0;
				list-style-position: inside;
				counter-reset: li;
				list-style: none;

				& > li + li {
					margin-top: 1rem;
				}

				li {
					position: relative;
					display: flex;
					align-items: center;
					gap: 1rem;
					color: #e9e9e9;

					&:before {
						content: counter(li);
						counter-increment: li;
						color: #fff;
						background-color: var(--color-primary);
						border-radius: 50%;
						height: 36px;
						width: 36px;
						line-height: 36px;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 14px;
						font-weight: 500;

						@media (min-width: 1000px) {
							font-size: 18px;
							height: 48px;
							width: 48px;
						}
					}
				}
			}
		}

		.col-content {
			.description,
			.thesis {
				margin: 2.2rem 0;
			}

			.description p {
				margin: 1rem 0;
			}

			.buttons {
				display: flex;
				flex-wrap: wrap;
				gap: 2rem;

				:global(a) {
					width: 100%;

					@media (min-width: $breakpoint) {
						width: auto;
					}
				}
			}
		}

		.col-image {
			display: flex;
			justify-content: center;
		}
	}
</style>
