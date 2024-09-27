//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! <https://github.com/kinobi-so/kinobi>
//!

use crate::generated::types::AssetMetadataArgsV1;
use crate::generated::types::RoyaltyArgsV1;
use borsh::BorshSerialize;
use borsh::BorshDeserialize;

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct CreateAssetArgsV1 {
pub transferrable: bool,
pub rentable: bool,
pub metadata: Option<AssetMetadataArgsV1>,
pub royalty: Option<RoyaltyArgsV1>,
}

