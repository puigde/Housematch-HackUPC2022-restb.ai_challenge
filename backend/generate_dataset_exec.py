import backend
from pkl import load_data, save_data

property_list = load_data("property_data.pkl")

#AQUÍ DONATS ELS URL CARREGUEM ELS ENCODINGS I ELS GUARDEM

y = load_data('response.pkl')
backend.create_empty_general()
x,y = backend.generate_dataset(property_list, y)
save_data(x,'x.pkl')