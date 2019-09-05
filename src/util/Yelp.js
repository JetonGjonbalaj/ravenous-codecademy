const apiKey = '5R9oauDyKpWsdUP4x3VZZeZtL-Owd7Ix7v7i5rygaWdqzKQvVlJD1-_WozkHA8Cw8CGD9QttRFjfu-wNf0TKEyHCEF9wUnB-Pb5DwPHi4WpwMtTnkI7jUzItRQJwXXYx';

const Yelp = {
    search: function(term, location, sortBy) {
        const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=50&term=${term}&location=${location}&sort_by=${sortBy}`;
        return fetch(
            url,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                } 
            }
        )
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(jsonResponse => {
            if (typeof jsonResponse === 'object' && jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.alias,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            } else return [];
        });
    }
}

export default Yelp;