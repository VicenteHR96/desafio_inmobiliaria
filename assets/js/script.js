//DOM

const rowVentas = document.querySelector("#row-ventas");
const rowAlquiler = document.querySelector("#row-alquiler");

// Arreglos y Objetos

const propiedadesVenta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial.",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: "5.000",
    smoke: false,
    pets: false,
  },

  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: "1.200",
    smoke: true,
    pets: true,
  },

  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: "4.500",
    smoke: false,
    pets: true,
  },

  {
    nombre: "Cabaña a los pies del Volcán Llaima",
    src: "https://a0.muscache.com/im/pictures/d6a9fb50-53e8-419a-ba35-a56c28975256.jpg?im_w=1200",
    descripcion:
      "Cabaña con vista al espectacular Volcán Llaima, rodeada de bosques precordilleranos.",
    ubicacion: "Curacautín, Araucanía, Chile",
    habitaciones: 1,
    baños: 1,
    costo: "3.500",
    smoke: false,
    pets: true,
  },

  {
    nombre: "Casa Alto la Invernada - Termas de Chillán",
    src: "https://a0.muscache.com/im/pictures/b9b96d52-4f11-4db8-ab33-fcdbdbaaffd3.jpg?im_w=1200",
    descripcion:
      "Hermosa casa en medio de bosque nativo. Si estás buscando desconexión y relajo, este es tu hogar.",
    ubicacion: "Termas de Chillan, Chillan, Chile",
    habitaciones: 3,
    baños: 1,
    costo: "2.300",
    smoke: false,
    pets: false,
  },

  {
    nombre: "Casa Playa Ritoque",
    src: "https://a0.muscache.com/im/pictures/fdd961bd-2f05-4f3d-a734-2bdcef35ed9d.jpg?im_w=1200",
    descripcion:
      "Hermosa casa en Ritoque totalmente equipada. Bello patio con quincho, horno de barro, piscina.",
    ubicacion: "Ritoque, Región de Valparaíso, Chile",
    habitaciones: 3,
    baños: 2,
    costo: "3.900",
    smoke: true,
    pets: true,
  },
];

const propiedadesAlquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: "2.000",
    smoke: false,
    pets: true,
  },

  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: "2.500",
    smoke: true,
    pets: true,
  },

  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: "2.200",
    smoke: false,
    pets: false,
  },

  {
    nombre: "Punta Recreo - Vista Mar",
    src: "https://a0.muscache.com/im/pictures/03e122a8-ebfc-4a67-9bea-1d22aaae4cd1.jpg?im_w=1200",
    descripcion:
      "Punta Recreo se encuentra en el corazón de viña del mar, con una vista excepcional, ubicada en sector tranquilo en primera línea,  frente al club de yates.",
    ubicacion: "Diego Portales 349, Recreo, Viña del mar",
    habitaciones: 2,
    baños: 1,
    costo: "1.200",
    smoke: true,
    pets: false,
  },

  {
    nombre: "Departamento Colegiales Hipster",
    src: "https://a0.muscache.com/im/pictures/9622d7ed-c048-48dd-9c25-15fe47060e3a.jpg?im_w=1200",
    descripcion:
      "Se encuentra situado a distancia caminable de numerosos bares, restaurantes, cafés, proximo al Cementerio de la Chacarita y Parque los Andes.",
    ubicacion: "Colegiales 231, Palermo, BA.",
    habitaciones: 3,
    baños: 2,
    costo: "1.450",
    smoke: false,
    pets: true,
  },

  {
    nombre: "IPA House - A minutos de la playa",
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-945559292269435895/original/3cd77b29-2dc7-46ee-8de4-6854bea664b0.jpeg?im_w=1200",
    descripcion:
      "IPA House es una casa independiente, que forma parte de un conjunto armonioso y acogedor de residencias.",
    ubicacion: "Río de Janeiro, Brasil",
    habitaciones: 2,
    baños: 2,
    costo: "3.000",
    smoke: false,
    pets: true,
  },
];

if (window.location.href.includes("propiedades_alquiler")) {
  rowVentas.style.display = "none";
} else if (window.location.href.includes("propiedades_venta.html")) {
  let templateCardsVenta = "";
  for (var propiedadVenta of propiedadesVenta) {
    templateCardsVenta += `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img
            src= ${propiedadVenta.src}
            class="card-img-top"
            alt="${propiedadVenta.nombre}"
          />
          <div class="card-body">
            <h5 class="card-title">
              ${propiedadVenta.nombre}
            </h5>
            <p class="card-text">
              ${propiedadVenta.descripcion}
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> ${propiedadVenta.ubicacion}
            </p>
            <p>
              <i class="fas fa-bed"></i> ${
                propiedadVenta.habitaciones
              } Habitaciones |
              <i class="fas fa-bath"></i> ${propiedadVenta.baños} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedadVenta.costo}</p>
            ${
              propiedadVenta.smoke === true
                ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
                : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
            }
            ${
              propiedadVenta.pets === true
                ? '<p class="text-success"><i class="fa-solid fa-paw"></i> Mascotas permitidas</p>'
                : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
            }
          </div>
        </div>
      </div>`;
  }

  rowVentas.innerHTML = templateCardsVenta;
} else {
  var propiedadesVentaMostrar = propiedadesVenta.slice(0, 3);
  let templateCardsVenta = "";
  for (var propiedadVenta of propiedadesVentaMostrar) {
    templateCardsVenta += `
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img
              src= ${propiedadVenta.src}
              class="card-img-top"
              alt="${propiedadVenta.nombre}"
            />
            <div class="card-body">
              <h5 class="card-title">
                ${propiedadVenta.nombre}
              </h5>
              <p class="card-text">
                ${propiedadVenta.descripcion}
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i> ${
                  propiedadVenta.ubicacion
                }
              </p>
              <p>
                <i class="fas fa-bed"></i> ${
                  propiedadVenta.habitaciones
                } Habitaciones |
                <i class="fas fa-bath"></i> ${propiedadVenta.baños} Baños
              </p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedadVenta.costo}</p>
              ${
                propiedadVenta.smoke === true
                  ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
                  : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
              }
              ${
                propiedadVenta.pets === true
                  ? '<p class="text-success"><i class="fa-solid fa-paw"></i> Mascotas permitidas</p>'
                  : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
              }
            </div>
          </div>
        </div>`;
  }

  rowVentas.innerHTML = templateCardsVenta;
}

if (window.location.href.includes("propiedades_venta")) {
  rowAlquiler.style.display = "none";
} else if (window.location.href.includes("propiedades_alquiler.html")) {
  let templateCardsAlquiler = "";
  for (var propiedadAlquiler of propiedadesAlquiler) {
    templateCardsAlquiler += `
<div class="col-md-4 mb-4">
            <div class="card h-100">
              <img
                src= ${propiedadAlquiler.src}
                class="card-img-top"
                alt="${propiedadAlquiler.nombre}"
              />
              <div class="card-body">
                <h5 class="card-title">
                    ${propiedadAlquiler.nombre}
                </h5>
                <p class="card-text">
                    ${propiedadAlquiler.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${
                    propiedadAlquiler.ubicacion
                  }
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${
                    propiedadAlquiler.habitaciones
                  } Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedadAlquiler.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${
                  propiedadAlquiler.costo
                }</p>
                ${
                  propiedadAlquiler.smoke === true
                    ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
                    : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
                }
                  ${
                    propiedadAlquiler.pets === true
                      ? '<p class="text-success"><i class="fa-solid fa-paw"></i> Mascotas permitidas</p>'
                      : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
                  }
              </div>
            </div>
          </div>
`;
  }

  rowAlquiler.innerHTML += templateCardsAlquiler;
} else {
  var propiedadesAlquilerMostrar = propiedadesAlquiler.slice(0, 3);
  let templateCardsAlquiler = "";
  for (var propiedadAlquiler of propiedadesAlquilerMostrar) {
    templateCardsAlquiler += `
<div class="col-md-4 mb-4">
            <div class="card h-100">
              <img
                src= ${propiedadAlquiler.src}
                class="card-img-top"
                alt="${propiedadAlquiler.nombre}"
              />
              <div class="card-body">
                <h5 class="card-title">
                    ${propiedadAlquiler.nombre}
                </h5>
                <p class="card-text">
                    ${propiedadAlquiler.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${
                    propiedadAlquiler.ubicacion
                  }
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${
                    propiedadAlquiler.habitaciones
                  } Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedadAlquiler.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${
                  propiedadAlquiler.costo
                }</p>
                ${
                  propiedadAlquiler.smoke === true
                    ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
                    : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
                }
                  ${
                    propiedadAlquiler.pets === true
                      ? '<p class="text-success"><i class="fa-solid fa-paw"></i> Mascotas permitidas</p>'
                      : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
                  }
              </div>
            </div>
          </div>
`;
  }

  rowAlquiler.innerHTML += templateCardsAlquiler;
}
