import { gql } from '@apollo/client';

import { Base_Recipe } from './fragments'

export const GetRecipes = gql`
${Base_Recipe}
query GetRecipes($page: Int,
  $pageSize: Int,
  $tagFilters: [String],
  $premiumOnly: Boolean,
  $includePremiumPreview: Boolean,
) {
  listRecipes(input: {
    page: $page
    pageSize: $pageSize
    tagFilters: $tagFilters,
    premiumOnly: $premiumOnly,
    includePremiumPreview: $includePremiumPreview
  }) {
    recipes {
      ...BaseRecipe
    }
    totalSize
    nextPage
  }
}`;


