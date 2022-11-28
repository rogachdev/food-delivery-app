const onboarding_screens = [
	{
		id: 1,
		backgroundImage: require('../assets/images/background_01.png'),
		bannerImage: require('../assets/images/favourite_food.png'),
		title: 'Escolha uma comida favorita',
		description:
			'Quando você comprar pelo CDR Delivery, nós lhe daremos cupons, promoções e recompensas exclusivas',
	},
	{
		id: 2,
		backgroundImage: require('../assets/images/background_02.png'),
		bannerImage: require('../assets/images/hot_delivery.png'),
		title: 'Entrega quente em casa',
		description:
			'Tornamos o pedido de comida rápido, simples e gratuito, não importa se você faz o pedido on-line ou em dinheiro',
	},
	{
		id: 3,
		backgroundImage: require('../assets/images/background_01.png'),
		bannerImage: require('../assets/images/great_food.png'),
		title: 'Receba a boa comida',
		description:
			'Você receberá a ótima comida em uma hora. E ganhe créditos de entrega grátis para cada pedido.',
	},
]

const screens = {
	main_layout: 'MainLayout',
	home: 'Catálogo',
	search: 'Procurar',
	cart: 'Carrinho',
	favourite: 'Favorito',
	notification: 'Notificação',
	my_wallet: 'Minha carteira',
}

const bottom_tabs = [
	{
		id: 0,
		label: screens.home,
	},
	{
		id: 1,
		label: screens.search,
	},
	{
		id: 2,
		label: screens.cart,
	},
	{
		id: 3,
		label: screens.favourite,
	},
	{
		id: 4,
		label: screens.notification,
	},
]

const delivery_time = [
	{
		id: 1,
		label: '10 Mins',
	},
	{
		id: 2,
		label: '20 Mins',
	},
	{
		id: 3,
		label: '30 Mins',
	},
]

const ratings = [
	{
		id: 1,
		label: 1,
	},
	{
		id: 2,
		label: 2,
	},
	{
		id: 3,
		label: 3,
	},
	{
		id: 4,
		label: 4,
	},
	{
		id: 5,
		label: 5,
	},
]

const tags = [
	{
		id: 1,
		label: 'Hambúrguer',
	},
	{
		id: 2,
		label: 'Comida rápida',
	},
	{
		id: 3,
		label: 'Pizza',
	},
	{
		id: 4,
		label: 'Asiático',
	},
	{
		id: 5,
		label: 'Sobremesa',
	},
	{
		id: 6,
		label: 'Café da manhã',
	},
	{
		id: 7,
		label: 'Vegetal',
	},
	{
		id: 8,
		label: 'Tacos',
	},
]

const track_order_status = [
	{
		id: 1,
		title: 'Pedido confirmado',
		sub_title: 'Seu pedido foi recebido',
	},
	{
		id: 2,
		title: 'Pedido preparado',
		sub_title: 'Seu pedido foi preparado',
	},
	{
		id: 3,
		title: 'Entrega em andamento',
		sub_title: 'Espere! Sua comida está a caminho',
	},
	{
		id: 4,
		title: 'Entregue',
		sub_title: 'Desfrute de sua refeição!',
	},
	{
		id: 5,
		title: 'Nos avalie',
		sub_title: 'Ajude-nos a melhorar o nosso serviço',
	},
]

const tips = [
	{
		id: 1,
		label: 'Sem dicas',
		value: 0,
	},
	{
		id: 2,
		label: '$5',
		value: 5,
	},
	{
		id: 3,
		label: '$10',
		value: 10,
	},
	{
		id: 4,
		label: '$15',
		value: 15,
	},
	{
		id: 5,
		label: '$20',
		value: 20,
	},
]

const gender = [
	{
		id: 0,
		label: 'Masculino',
		value: 'Male',
	},
	{
		id: 1,
		label: 'Feminino',
		value: 'Female',
	},
	{
		id: 2,
		label: 'Outros',
		value: 'others',
	},
]

const state = [
	{
		id: 0,
		label: 'Sarawak',
		value: 'Sarawak',
	},
	{
		id: 1,
		label: 'Sabah',
		value: 'Sabah',
	},
	{
		id: 2,
		label: 'Johor',
		value: 'Johor',
	},
	{
		id: 3,
		label: 'Kedah',
		value: 'Kedah',
	},
	{
		id: 4,
		label: 'Kelantan',
		value: 'Kelantan',
	},
	{
		id: 5,
		label: 'Penang',
		value: 'Penang',
	},
]
// mudar a key_map
const GOOGLE_MAP_API_KEY = 'AIzaSyCFl4osnuiw1tb3gTnTQ7gPHWSCavyd6b8'

export default {
	onboarding_screens,
	screens,
	bottom_tabs,
	delivery_time,
	ratings,
	tags,
	track_order_status,
	tips,
	gender,
	state,
	GOOGLE_MAP_API_KEY,
}
